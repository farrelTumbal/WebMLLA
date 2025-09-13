import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Badge } from './ui/badge';
import { Download, Filter, BarChart3 } from 'lucide-react';
import researchData from '../data/mock';

const Dashboard = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const barChartRef = useRef(null);
  const radarChartRef = useRef(null);
  const scatterChartRef = useRef(null);
  const heatmapRef = useRef(null);

  // Load Chart.js
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    script.onload = () => {
      initializeCharts();
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Reinitialize charts when filter changes
  useEffect(() => {
    if (window.Chart) {
      initializeCharts();
    }
  }, [selectedFilter]);

  const initializeCharts = () => {
    if (!window.Chart) return;

    // Destroy existing charts
    if (barChartRef.current?.chart) barChartRef.current.chart.destroy();
    if (radarChartRef.current?.chart) radarChartRef.current.chart.destroy();
    if (scatterChartRef.current?.chart) scatterChartRef.current.chart.destroy();
    if (heatmapRef.current?.chart) heatmapRef.current.chart.destroy();

    const currentData = researchData.uxDimensions[selectedFilter];
    
    // Bar Chart
    if (barChartRef.current) {
      barChartRef.current.chart = new window.Chart(barChartRef.current, {
        type: 'bar',
        data: {
          labels: ['Engagement', 'Usability', 'Retention', 'Acceptance'],
          datasets: [{
            label: 'Mean Score',
            data: [currentData.engagement, currentData.usability, currentData.retention, currentData.acceptance],
            backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'],
            borderColor: ['#2563eb', '#059669', '#d97706', '#dc2626'],
            borderWidth: 2,
            borderRadius: 8
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              max: 5,
              grid: { color: '#f1f5f9' },
              ticks: { color: '#64748b' }
            },
            x: {
              grid: { display: false },
              ticks: { color: '#64748b' }
            }
          },
          plugins: {
            legend: { display: false }
          }
        }
      });
    }

    // Radar Chart
    if (radarChartRef.current) {
      radarChartRef.current.chart = new window.Chart(radarChartRef.current, {
        type: 'radar',
        data: {
          labels: ['Engagement', 'Usability', 'Retention', 'Acceptance'],
          datasets: [{
            label: 'UX Dimensions',
            data: [currentData.engagement, currentData.usability, currentData.retention, currentData.acceptance],
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.1)',
            borderWidth: 3,
            pointBackgroundColor: '#3b82f6',
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2,
            pointRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            r: {
              beginAtZero: true,
              max: 5,
              grid: { color: '#f1f5f9' },
              pointLabels: { color: '#64748b' },
              ticks: { color: '#64748b', display: false }
            }
          }
        }
      });
    }

    // Scatter Plot
    if (scatterChartRef.current) {
      scatterChartRef.current.chart = new window.Chart(scatterChartRef.current, {
        type: 'scatter',
        data: {
          datasets: [{
            label: 'Passive Users',
            data: researchData.clusterData.filter(d => d.cluster === 'passive').map(d => ({x: d.engagement, y: d.retention})),
            backgroundColor: '#94a3b8',
            borderColor: '#64748b'
          }, {
            label: 'Moderate Users',
            data: researchData.clusterData.filter(d => d.cluster === 'moderate').map(d => ({x: d.engagement, y: d.retention})),
            backgroundColor: '#60a5fa',
            borderColor: '#3b82f6'
          }, {
            label: 'Active Users',
            data: researchData.clusterData.filter(d => d.cluster === 'active').map(d => ({x: d.engagement, y: d.retention})),
            backgroundColor: '#f97316',
            borderColor: '#ea580c'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              title: { display: true, text: 'Engagement Score', color: '#64748b' },
              grid: { color: '#f1f5f9' },
              ticks: { color: '#64748b' }
            },
            y: {
              title: { display: true, text: 'Retention Score', color: '#64748b' },
              grid: { color: '#f1f5f9' },
              ticks: { color: '#64748b' }
            }
          }
        }
      });
    }
  };

  const handleExport = (type) => {
    alert(`Exporting ${type}... (This is a demo)`);
  };

  const getFilterBadge = () => {
    const badges = {
      all: { text: 'All Respondents', color: 'bg-blue-100 text-blue-800' },
      users: { text: 'MLLA Users Only', color: 'bg-green-100 text-green-800' },
      nonUsers: { text: 'Non-Users Only', color: 'bg-orange-100 text-orange-800' }
    };
    return badges[selectedFilter];
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Interactive Dashboard</h1>
            <p className="text-gray-600">Explore UX dimensions and statistical relationships</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Select value={selectedFilter} onValueChange={setSelectedFilter}>
              <SelectTrigger className="w-48">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Respondents</SelectItem>
                <SelectItem value="users">MLLA Users Only</SelectItem>
                <SelectItem value="nonUsers">Non-Users Only</SelectItem>
              </SelectContent>
            </Select>
            <Button onClick={() => handleExport('PNG')} variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export PNG
            </Button>
          </div>
        </div>
        <Badge className={`mt-3 ${getFilterBadge().color}`}>
          {getFilterBadge().text}
        </Badge>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Bar Chart */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="mr-2 h-5 w-5 text-blue-600" />
              UX Dimensions - Mean Scores
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <canvas ref={barChartRef}></canvas>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Mean scores across the four UX dimensions. Active users show moderate scores (2.8-2.9), 
              while non-users demonstrate high engagement expectations (4.18) but low retention intent.
            </p>
          </CardContent>
        </Card>

        {/* Radar Chart */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>UX Dimensions - Radar View</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <canvas ref={radarChartRef}></canvas>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Radar visualization shows the balanced profile across UX dimensions, 
              revealing patterns in user experience perceptions.
            </p>
          </CardContent>
        </Card>

        {/* Scatter Plot */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>User Clusters - Engagement vs Retention</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <canvas ref={scatterChartRef}></canvas>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Three distinct user segments: Passive (low engagement/retention), 
              Moderate (balanced scores), and Active (high engagement, variable retention).
            </p>
          </CardContent>
        </Card>

        {/* Correlation Heatmap */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Spearman Correlation Matrix</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-2 mb-4">
              {['Engagement', 'Usability', 'Retention', 'Acceptance'].map((row, i) => (
                <div key={i} className="space-y-2">
                  <div className="text-xs font-medium text-gray-600 text-center">{row}</div>
                  {researchData.correlations[i].map((corr, j) => (
                    <div
                      key={j}
                      className="h-8 flex items-center justify-center text-xs font-medium text-white rounded"
                      style={{
                        backgroundColor: corr === 1 ? '#1f2937' : corr > 0.7 ? '#dc2626' : corr > 0.5 ? '#f59e0b' : '#10b981'
                      }}
                      title={`ρ = ${corr.toFixed(3)}`}
                    >
                      {corr.toFixed(2)}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600">
              Strong correlations between Usability-Acceptance (ρ=0.755) and Usability-Retention (ρ=0.729) 
              indicate usability as a key predictor of user satisfaction.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Reliability Section */}
      <Card className="border-0 shadow-lg mb-8">
        <CardHeader>
          <CardTitle>Instrument Reliability (Cronbach's α)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {Object.entries(researchData.reliability).map(([dimension, alpha]) => (
              <div key={dimension} className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900 mb-1">{alpha.toFixed(3)}</div>
                <div className="text-sm font-medium text-gray-600 capitalize">{dimension}</div>
                <div className={`text-xs mt-1 ${alpha > 0.8 ? 'text-green-600' : alpha > 0.7 ? 'text-yellow-600' : 'text-red-600'}`}>
                  {alpha > 0.8 ? 'Excellent' : alpha > 0.7 ? 'Good' : 'Acceptable'}
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-4">
            All scales demonstrate good to excellent internal consistency, with Acceptance showing 
            the highest reliability (α = 0.923) and Retention the lowest but still acceptable (α = 0.742).
          </p>
        </CardContent>
      </Card>

      {/* SEM Results */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Structural Equation Model - Path Coefficients</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {researchData.semPaths.map((path, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <span className="font-medium text-gray-700">{path.from}</span>
                  <span className="text-blue-600">→</span>
                  <span className="font-medium text-gray-700">{path.to}</span>
                </div>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  β = {path.coefficient.toFixed(3)}
                </Badge>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Structural equation modeling reveals that Usability is the strongest predictor of Acceptance (β = 0.755), 
            followed by moderate influences from Retention (β = 0.379) and Engagement (β = 0.319) on Usability.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;