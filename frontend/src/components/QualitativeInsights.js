import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Quote, MessageSquare, TrendingDown, Users } from 'lucide-react';
import researchData from '../data/mock';

const QualitativeInsights = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    script.onload = () => {
      initializeChart();
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const initializeChart = () => {
    if (!window.Chart || !chartRef.current) return;

    if (chartRef.current.chart) {
      chartRef.current.chart.destroy();
    }

    chartRef.current.chart = new window.Chart(chartRef.current, {
      type: 'bar',
      data: {
        labels: researchData.qualitativeThemes.map(theme => theme.theme),
        datasets: [{
          label: 'Frequency (%)',
          data: researchData.qualitativeThemes.map(theme => theme.frequency),
          backgroundColor: [
            '#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#f97316'
          ],
          borderColor: [
            '#dc2626', '#d97706', '#059669', '#2563eb', '#7c3aed', '#ea580c'
          ],
          borderWidth: 2,
          borderRadius: 8
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        scales: {
          x: {
            beginAtZero: true,
            max: 100,
            grid: { color: '#f1f5f9' },
            ticks: { 
              color: '#64748b',
              callback: function(value) {
                return value + '%';
              }
            }
          },
          y: {
            grid: { display: false },
            ticks: { color: '#64748b' }
          }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  };

  const getThemeIcon = (theme) => {
    const icons = {
      'Repetitive Content': TrendingDown,
      'No Real Retention': Users,
      'Limited Speaking Evaluation': MessageSquare,
      'Superficial Gamification': Quote,
      'Premium Walls Disruptive': TrendingDown,
      'Learning Feels Isolated': Users
    };
    return icons[theme] || Quote;
  };

  const getThemeColor = (frequency) => {
    if (frequency >= 80) return 'bg-red-100 text-red-800 border-red-200';
    if (frequency >= 60) return 'bg-orange-100 text-orange-800 border-orange-200';
    if (frequency >= 40) return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    return 'bg-blue-100 text-blue-800 border-blue-200';
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Qualitative Insights</h1>
        <p className="text-gray-600">Thematic analysis from 15 in-depth interviews with MLLA users</p>
        <div className="flex items-center gap-4 mt-4">
          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
            n = {researchData.interviewParticipants} participants
          </Badge>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Thematic Analysis
          </Badge>
          <Badge variant="secondary" className="bg-purple-100 text-purple-800">
            6 Major Themes Identified
          </Badge>
        </div>
      </div>

      {/* Theme Frequency Chart */}
      <Card className="border-0 shadow-lg mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageSquare className="mr-2 h-5 w-5 text-blue-600" />
            Theme Frequency Distribution
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 mb-4">
            <canvas ref={chartRef}></canvas>
          </div>
          <p className="text-sm text-gray-600">
            Interview analysis reveals critical pain points in current MLLA experiences, 
            with content-related issues being the most frequently mentioned concerns.
          </p>
        </CardContent>
      </Card>

      {/* Themes Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {researchData.qualitativeThemes.map((theme, index) => {
          const Icon = getThemeIcon(theme.theme);
          return (
            <Card key={index} className={`border-2 ${getThemeColor(theme.frequency)} shadow-lg hover:shadow-xl transition-all duration-300`}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Icon className="mr-3 h-5 w-5" />
                    {theme.theme}
                  </div>
                  <Badge variant="secondary" className="bg-white/80">
                    {theme.frequency}%
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {theme.quotes.map((quote, quoteIndex) => (
                    <div key={quoteIndex} className="bg-white/60 rounded-lg p-3 border-l-4 border-gray-300">
                      <Quote className="h-4 w-4 text-gray-400 mb-2" />
                      <p className="text-sm text-gray-700 italic leading-relaxed">
                        "{quote}"
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Key Insights Summary */}
      <Card className="border-0 shadow-lg mb-8">
        <CardHeader>
          <CardTitle>Key Qualitative Findings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Content Issues</h3>
              <p className="text-gray-600 text-sm">
                93% reported poor retention and 87% complained about repetitive content, 
                indicating fundamental pedagogical problems.
              </p>
            </div>

            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Feature Limitations</h3>
              <p className="text-gray-600 text-sm">
                Speaking evaluation systems and gamification elements fail to provide 
                meaningful learning experiences for 67-73% of users.
              </p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Social Learning Gap</h3>
              <p className="text-gray-600 text-sm">
                45% feel isolated in their learning journey, suggesting need for 
                collaborative and contextual learning experiences.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Implications for GIS-MLLA */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-900">Implications for GIS-MLLA Framework</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-600 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">
                <strong>Contextual Learning:</strong> Location-based content could address the repetitive 
                nature of current MLLAs by providing real-world, situational language practice.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-600 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">
                <strong>Social Integration:</strong> GIS technology could facilitate local language 
                exchanges and community-based learning to reduce isolation.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-blue-600 w-2 h-2 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-700">
                <strong>Retention Enhancement:</strong> Place-based learning experiences could improve 
                retention by creating memorable, contextualized language encounters.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QualitativeInsights;