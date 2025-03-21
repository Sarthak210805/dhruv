import React from 'react';
import { FileUpload } from '../components/FileUpload';
import { Card, CardHeader, CardContent } from '../components/ui/card';
import { FileText, Award, Clock } from 'lucide-react';
import toast from 'react-hot-toast';

export function StudentDashboard() {
  const handleSubmitAssignment = (files: File[]) => {
    toast.success('Assignment submitted successfully');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Student Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="flex items-center p-6">
            <FileText className="h-8 w-8 text-blue-500" />
            <div className="ml-4">
              <h2 className="font-semibold">Submitted</h2>
              <p className="text-2xl font-bold">0</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="flex items-center p-6">
            <Award className="h-8 w-8 text-green-500" />
            <div className="ml-4">
              <h2 className="font-semibold">Average Grade</h2>
              <p className="text-2xl font-bold">N/A</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="flex items-center p-6">
            <Clock className="h-8 w-8 text-orange-500" />
            <div className="ml-4">
              <h2 className="font-semibold">Pending</h2>
              <p className="text-2xl font-bold">0</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-xl font-semibold">Submit Assignment</h2>
        </CardHeader>
        <CardContent>
          <FileUpload onFileSelect={handleSubmitAssignment} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Recent Feedback</h2>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-gray-500">
            <Award className="h-12 w-12 mx-auto text-gray-400 mb-2" />
            <p>No feedback available yet</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}