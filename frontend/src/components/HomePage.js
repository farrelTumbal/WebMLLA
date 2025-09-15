import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { BarChart3, Users, MessageSquare, TrendingUp } from 'lucide-react';
import researchData from '../data/mock';

const HomePage = () => {
  const stats = [
    { 
      icon: Users, 
      label: 'Total Respondents', 
      value: researchData.totalRespondents,
      color: 'bg-blue-500'
    },
    { 
      icon: TrendingUp, 
      label: 'Active Users', 
      value: researchData.users,
      color: 'bg-green-500'
    },
    { 
      icon: MessageSquare, 
      label: 'Interview Participants', 
      value: researchData.interviewParticipants,
      color: 'bg-orange-500'
    },
    { 
      icon: BarChart3, 
      label: 'Non-Users', 
      value: researchData.nonUsers,
      color: 'bg-purple-500'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <Badge variant="secondary" className="mb-4 text-sm font-medium">
          Mixed-Methods Research Study
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Exploring User Experience of 
          <span className="text-blue-600"> Mobile Language Learning Applications</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          A comprehensive mixed-methods study toward developing the GIS-MLLA Framework, 
          analyzing user experiences across engagement, usability, retention, and acceptance dimensions.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Key Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
              <TrendingUp className="mr-3 h-5 w-5 text-blue-600" />
              Key Quantitative Findings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <span className="font-medium text-gray-700">Active Users UX Score</span>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  2.8-2.9 (Moderate)
                </Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                <span className="font-medium text-gray-700">Non-User Engagement</span>
                <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                  4.18 (High)
                </Badge>
              </div>
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <span className="font-medium text-gray-700">Instrument Reliability</span>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  α = 0.74-0.95
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
              <MessageSquare className="mr-3 h-5 w-5 text-orange-600" />
              Key Qualitative Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-red-400 pl-4">
                <p className="font-semibold text-gray-700">Content Issues</p>
                <p className="text-sm text-gray-600">Repetitive content (87%), Limited retention (93%)</p>
              </div>
              <div className="border-l-4 border-yellow-400 pl-4">
                <p className="font-semibold text-gray-700">Speaking Limitations</p>
                <p className="text-sm text-gray-600">Poor evaluation system, pronunciation feedback lacking</p>
              </div>
              <div className="border-l-4 border-purple-400 pl-4">
                <p className="font-semibold text-gray-700">Gamification Issues</p>
                <p className="text-sm text-gray-600">Superficial game elements, no real learning value</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Research Methodology */}
      <Card className="border-0 shadow-lg mb-16">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-900 text-center">
            Research Methodology
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Quantitative Survey</h3>
              <p className="text-gray-600">Likert-scale questionnaire with 269 respondents measuring UX dimensions</p>
            </div>
            <div>
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Qualitative Interviews</h3>
              <p className="text-gray-600">In-depth interviews with 15 MLLA users for thematic analysis</p>
            </div>
            <div>
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Statistical Analysis</h3>
              <p className="text-gray-600">Non-parametric tests, SEM modeling, and bootstrap regression</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CTA Section */}
      <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white">
        <h2 className="text-3xl font-bold mb-4">Explore the Complete Research Findings</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Dive deep into interactive visualizations, qualitative insights, and methodological implications 
          for the future of mobile language learning applications.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/dashboard">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <BarChart3 className="mr-2 h-5 w-5" />
              Quantitative Insights
            </Button>
          </Link>
          <Link to="/insights">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <MessageSquare className="mr-2 h-5 w-5" />
              Qualitative Insights
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;