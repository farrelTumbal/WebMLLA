import React from 'react';
import { Download, FileText, BarChart3 } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const handleDownload = (type) => {
    // Mock download functionality
    alert(`Downloading ${type}... (This is a demo)`);
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold">MLLA Research</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              This website presents the findings of a comprehensive mixed-methods study 
              exploring user experiences of Mobile Language Learning Applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/dashboard" className="hover:text-white transition-colors">Dashboard</a></li>
              <li><a href="/insights" className="hover:text-white transition-colors">Qualitative Insights</a></li>
              <li><a href="/methods" className="hover:text-white transition-colors">Methods & Implications</a></li>
            </ul>
          </div>

          {/* Downloads */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Research Materials</h3>
            <div className="space-y-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleDownload('PDF Report')}
                className="w-full justify-start bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <FileText className="mr-2 h-4 w-4" />
                Download PDF Report
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleDownload('Raw Data')}
                className="w-full justify-start bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Raw Data
              </Button>
            </div>
          </div>
        </div>

        {/* Academic Notice */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="bg-gray-800 rounded-lg p-6">
            <h4 className="text-lg font-semibold mb-2 text-blue-400">Academic Research Notice</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              This website was developed to present the findings of a mixed-methods research study 
              titled "Exploring User Experience of Mobile Language Learning Applications (MLLAs): 
              A Mixed-Methods Study toward GIS-MLLA Framework". All data presented is derived from 
              survey responses (n=269) and qualitative interviews (n=15) conducted as part of this research.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-gray-800 mt-8">
          <p className="text-gray-400 text-sm">
            © 2024 MLLA Research Study. Created for academic research presentation purposes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;