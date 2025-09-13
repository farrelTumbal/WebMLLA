import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Users, BarChart3, MessageSquare, TrendingUp, 
  Map, Lightbulb, Target, Download 
} from 'lucide-react';
import researchData from '../data/mock';

const MethodsImplications = () => {
  const handleDownload = (type) => {
    alert(`Downloading ${type}... (This is a demo)`);
  };

  const methodologySteps = [
    {
      icon: Users,
      title: "Survey Design & Distribution",
      description: "Likert-scale questionnaire measuring 4 UX dimensions across 20 items, distributed to 269 respondents",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: MessageSquare,
      title: "Qualitative Interviews",
      description: "Semi-structured interviews with 15 MLLA users exploring experiences and pain points",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: BarChart3,
      title: "Statistical Analysis",
      description: "Non-parametric tests (Spearman, Kruskal-Wallis, Friedman), bootstrap regression, and SEM modeling",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Data Triangulation",
      description: "Integration of quantitative and qualitative findings for comprehensive insights",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const implications = [
    {
      category: "Product Design",
      icon: Lightbulb,
      color: "bg-yellow-50 border-yellow-200",
      points: [
        "Prioritize usability improvements as they strongly predict acceptance (β = 0.755)",
        "Address content repetitiveness through adaptive learning algorithms",
        "Enhance speaking evaluation systems with advanced speech recognition",
        "Redesign gamification to provide meaningful learning progression"
      ]
    },
    {
      category: "User Experience",
      icon: Users,
      color: "bg-blue-50 border-blue-200", 
      points: [
        "Focus on retention strategies as current users show moderate scores (2.9)",
        "Develop social learning features to reduce isolation (45% concern)",
        "Implement contextual learning paths based on user goals",
        "Create premium models that enhance rather than disrupt learning"
      ]
    },
    {
      category: "Research & Development",
      icon: Target,
      color: "bg-green-50 border-green-200",
      points: [
        "Investigate the high engagement expectations of non-users (4.18)",
        "Develop metrics that better capture long-term retention",
        "Study the relationship between gamification depth and learning outcomes",
        "Explore location-based learning through GIS integration"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Methods & Implications</h1>
        <p className="text-gray-600">Research methodology and practical implications for MLLA development</p>
      </div>

      {/* Research Summary */}
      <Card className="border-0 shadow-lg mb-8">
        <CardHeader>
          <CardTitle>Research Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-1">{researchData.totalRespondents}</div>
              <div className="text-sm text-gray-600">Total Respondents</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-1">{researchData.users}</div>
              <div className="text-sm text-gray-600">MLLA Users</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600 mb-1">{researchData.interviewParticipants}</div>
              <div className="text-sm text-gray-600">Interview Participants</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 mb-1">4</div>
              <div className="text-sm text-gray-600">UX Dimensions</div>
            </div>
          </div>
          <p className="text-gray-600 leading-relaxed">
            This mixed-methods study employed a sequential explanatory design, combining quantitative 
            survey data with qualitative interview insights to explore user experiences of Mobile 
            Language Learning Applications and inform the development of a GIS-MLLA framework.
          </p>
        </CardContent>
      </Card>

      {/* Methodology Timeline */}
      <Card className="border-0 shadow-lg mb-8">
        <CardHeader>
          <CardTitle>Research Methodology</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {methodologySteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={`${step.color} p-3 rounded-lg flex-shrink-0`}>
                  <step.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                <div className="text-sm text-gray-400 font-medium">
                  Phase {index + 1}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Statistical Methods */}
      <Card className="border-0 shadow-lg mb-8">
        <CardHeader>
          <CardTitle>Statistical Analysis Techniques</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Descriptive Statistics</h4>
              <p className="text-sm text-gray-600">Mean, median, standard deviation for UX dimensions</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Reliability Analysis</h4>
              <p className="text-sm text-gray-600">Cronbach's α for internal consistency (0.74-0.95)</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Spearman Correlation</h4>
              <p className="text-sm text-gray-600">Non-parametric correlation analysis</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Kruskal-Wallis Test</h4>
              <p className="text-sm text-gray-600">Group comparisons across different MLLAs</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Bootstrap Regression</h4>
              <p className="text-sm text-gray-600">Robust prediction modeling with resampling</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">SEM Analysis</h4>
              <p className="text-sm text-gray-600">Structural equation modeling for path relationships</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Findings */}
      <Card className="border-0 shadow-lg mb-8">
        <CardHeader>
          <CardTitle>Key Statistical Findings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
              <h4 className="font-semibold text-blue-900 mb-2">Structural Relationships (SEM)</h4>
              <p className="text-blue-800 text-sm">
                Usability → Acceptance shows strongest path (β = 0.755), followed by 
                Retention → Usability (β = 0.379) and Engagement → Usability (β = 0.319).
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
              <h4 className="font-semibold text-green-900 mb-2">Group Differences</h4>
              <p className="text-green-800 text-sm">
                Non-users show significantly higher engagement expectations (4.18) compared to 
                active users (2.8), but lower retention intent (2.1 vs 2.9).
              </p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
              <h4 className="font-semibold text-orange-900 mb-2">Correlation Patterns</h4>
              <p className="text-orange-800 text-sm">
                Strongest correlations found between Usability-Acceptance (ρ = 0.755) and 
                Usability-Retention (ρ = 0.729), indicating usability as a central factor.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Practical Implications */}
      <div className="space-y-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Practical Implications</h2>
        {implications.map((category, index) => (
          <Card key={index} className={`border-2 ${category.color} shadow-lg`}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <category.icon className="mr-3 h-5 w-5" />
                {category.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {category.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm">{point}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* GIS-MLLA Framework */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-indigo-100">
        <CardHeader>
          <CardTitle className="flex items-center text-blue-900">
            <Map className="mr-3 h-6 w-6" />
            GIS-MLLA Framework Proposal
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Based on the research findings, the GIS-MLLA framework proposes integrating Geographic 
              Information Systems with Mobile Language Learning Applications to address current limitations 
              and enhance user experience through contextual, location-based learning.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Framework Components</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <Badge variant="secondary" className="bg-blue-100">Core</Badge>
                    <span>Location-aware content delivery</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Badge variant="secondary" className="bg-blue-100">Social</Badge>
                    <span>Community-based learning networks</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Badge variant="secondary" className="bg-blue-100">Adaptive</Badge>
                    <span>Context-sensitive difficulty adjustment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Badge variant="secondary" className="bg-blue-100">Immersive</Badge>
                    <span>AR/VR integration with real environments</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Expected Outcomes</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <TrendingUp className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Improved retention through contextual relevance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <TrendingUp className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Enhanced engagement via real-world application</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <TrendingUp className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Reduced learning isolation through location-based communities</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <TrendingUp className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Personalized learning experiences based on user context</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Download Section */}
      <Card className="border-0 shadow-lg mt-8">
        <CardHeader>
          <CardTitle>Research Materials</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => handleDownload('Full Research Paper')} className="flex-1">
              <Download className="mr-2 h-4 w-4" />
              Download Full Research Paper
            </Button>
            <Button onClick={() => handleDownload('Dataset')} variant="outline" className="flex-1">
              <Download className="mr-2 h-4 w-4" />
              Download Dataset (JSON)
            </Button>
            <Button onClick={() => handleDownload('Methodology')} variant="outline" className="flex-1">
              <Download className="mr-2 h-4 w-4" />
              Download Methodology Details
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MethodsImplications;