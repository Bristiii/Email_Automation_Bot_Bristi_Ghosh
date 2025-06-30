import React, { useState, useEffect } from 'react';
import { Eye, Clock, CheckCircle } from 'lucide-react';

interface ScreenshotType {
  id: string;
  imageUrl: string;
  title: string;
  status: 'pending' | 'in-progress' | 'completed';
  timestamp: Date;
}

const ScreenshotViewer: React.FC = () => {
  const [screenshots, setScreenshots] = useState<ScreenshotType[]>([]);
  const [currentStep, setCurrentStep] = useState(0);

  // Mock screenshots data
  const mockScreenshots: ScreenshotType[] = [
    {
      id: '1',
      imageUrl: '/placeholder.svg',
      title: 'Gmail Login Page',
      status: 'completed',
      timestamp: new Date(),
    },
    {
      id: '2',
      imageUrl: '/placeholder.svg',
      title: 'Composing Email',
      status: 'completed',
      timestamp: new Date(),
    },
    {
      id: '3',
      imageUrl: '/placeholder.svg',
      title: 'Email Sent Confirmation',
      status: 'completed',
      timestamp: new Date(),
    },
  ];

  // Simulate progressive screenshot loading
  useEffect(() => {
    const timer = setInterval(() => {
      if (currentStep < mockScreenshots.length) {
        setScreenshots((prev) => [...prev, mockScreenshots[currentStep]]);
        setCurrentStep((prev) => prev + 1);
      }
    }, 2000);

    return () => clearInterval(timer);
  }, [currentStep]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'in-progress':
        return <Clock className="w-4 h-4 text-yellow-500 animate-spin" />;
      default:
        return <Eye className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold">Automation Progress</h2>
        <p className="text-sm text-gray-500">
          {screenshots.length} of {mockScreenshots.length} steps completed
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {screenshots.map((screenshot, index) => (
            <div
              key={screenshot.id}
              className="border rounded-lg overflow-hidden bg-white shadow-sm"
            >
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{screenshot.title}</h3>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(screenshot.status)}
                    <span className="text-xs text-gray-500">
                      {screenshot.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-md p-2 flex justify-center">
                  <img
                    src={screenshot.imageUrl}
                    alt={screenshot.title}
                    className="max-h-40 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22150%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20width%3D%22200%22%20height%3D%22150%22%20fill%3D%22%23f3f4f6%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20font-family%3D%22sans-serif%22%20fill%3D%22%236b7280%22%3EScreenshot%20%7Bindex%20%2B%201%7D%3C%2Ftext%3E%3C%2Fsvg%3E';
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Status Indicator */}
      <div className="p-4 border-t border-gray-200 bg-gray-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm font-medium">
              {screenshots.length === mockScreenshots.length
                ? 'All steps completed'
                : 'Processing...'}
            </span>
          </div>
          <span className="text-sm text-gray-500">
            {screenshots.length} of {mockScreenshots.length} steps
          </span>
        </div>
        <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-green-500 h-2 rounded-full transition-all duration-300"
            style={{
              width: `${(screenshots.length / mockScreenshots.length) * 100}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ScreenshotViewer;
