import React, { useState } from 'react';
import { FileUpload } from '../components/FileUpload';
import { Card, CardHeader, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { FileText, Users, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';

export function TeacherDashboard() {
  const [assignments, setAssignments] = useState<File[]>([]);

  const handleFileSelect = (files: File[]) => {
    setAssignments(prev => [...prev, ...files]);
    toast.success(`${files.length} file(s) uploaded successfully`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Teacher Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="flex items-center p-6">
            <FileText className="h-8 w-8 text-blue-500" />
            <div className="ml-4">
              <h2 className="font-semibold">Total Assignments</h2>
              <p className="text-2xl font-bold">{assignments.length}</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="flex items-center p-6">
            <Users className="h-8 w-8 text-green-500" />
            <div className="ml-4">
              <h2 className="font-semibold">Students</h2>
              <p className="text-2xl font-bold">0</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="flex items-center p-6">
            <CheckCircle className="h-8 w-8 text-purple-500" />
            <div className="ml-4">
              <h2 className="font-semibold">Graded</h2>
              <p className="text-2xl font-bold">0</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-xl font-semibold">Upload Assignment</h2>
        </CardHeader>
        <CardContent>
          <FileUpload onFileSelect={handleFileSelect} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Recent Assignments</h2>
        </CardHeader>
        <CardContent>
          {assignments.length > 0 ? (
            <div className="space-y-4">
              {assignments.map((file, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-gray-500" />
                    <span className="ml-2 text-sm font-medium">{file.name}</span>
                  </div>
                  <Button size="sm" onClick={() => toast.success('Starting AI grading...')}>
                    Grade
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-4">No assignments uploaded yet</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}