import React, { useState } from 'react';
import { Incident } from '../../types/incident';
import { AlertCircle, Send } from 'lucide-react';

interface IncidentFormProps {
  onSubmit: (incident: Omit<Incident, 'id' | 'reported_at'>) => void;
}

interface FormState {
  title: string;
  description: string;
  severity: Incident['severity'];
}

export const IncidentForm: React.FC<IncidentFormProps> = ({ onSubmit }) => {
  const [formState, setFormState] = useState<FormState>({
    title: '',
    description: '',
    severity: 'Medium'
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formAnimation, setFormAnimation] = useState('');
  
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formState.title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!formState.description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formState);
      
      // Show success animation
      setFormAnimation('form-success');
      
      // Reset form after animation
      setTimeout(() => {
        setFormState({
          title: '',
          description: '',
          severity: 'Medium'
        });
        setFormAnimation('');
      }, 1000);
    } else {
      // Show error animation
      setFormAnimation('form-error');
      setTimeout(() => {
        setFormAnimation('');
      }, 600);
    }
  };
  
  return (
    <form 
      onSubmit={handleSubmit}
      className={`
        p-6 rounded-xl 
        bg-gray-900/60 backdrop-blur-md 
        border border-indigo-500/20
        shadow-lg transition-all duration-300
        transform perspective-[1000px]
        ${formAnimation === 'form-success' ? 'border-emerald-500/40 shadow-emerald-500/20' : ''}
        ${formAnimation === 'form-error' ? 'border-rose-500/40 shadow-rose-500/20 animate-shake' : ''}
      `}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      <h2 className="text-2xl font-bold text-white mb-6">Report New Incident</h2>
      
      <div className="space-y-5">
        <div className="space-y-1">
          <label htmlFor="title" className="block text-sm font-medium text-indigo-300">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formState.title}
            onChange={handleInputChange}
            className={`
              w-full px-4 py-2 rounded-lg 
              bg-gray-800/80 border focus:outline-none focus:ring-2
              text-white placeholder-gray-400
              transition-all duration-300
              ${errors.title 
                ? 'border-rose-500/50 focus:ring-rose-500/30' 
                : 'border-indigo-500/30 focus:ring-indigo-500/30 focus:border-indigo-500/50'}
            `}
            placeholder="Enter incident title"
          />
          {errors.title && (
            <p className="flex items-center gap-1 mt-1 text-sm text-rose-400">
              <AlertCircle className="h-3.5 w-3.5" />
              {errors.title}
            </p>
          )}
        </div>
        
        <div className="space-y-1">
          <label htmlFor="description" className="block text-sm font-medium text-indigo-300">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formState.description}
            onChange={handleInputChange}
            rows={4}
            className={`
              w-full px-4 py-2 rounded-lg 
              bg-gray-800/80 border focus:outline-none focus:ring-2
              text-white placeholder-gray-400
              transition-all duration-300
              ${errors.description 
                ? 'border-rose-500/50 focus:ring-rose-500/30' 
                : 'border-indigo-500/30 focus:ring-indigo-500/30 focus:border-indigo-500/50'}
            `}
            placeholder="Describe the incident in detail"
          />
          {errors.description && (
            <p className="flex items-center gap-1 mt-1 text-sm text-rose-400">
              <AlertCircle className="h-3.5 w-3.5" />
              {errors.description}
            </p>
          )}
        </div>
        
        <div className="space-y-1">
          <label htmlFor="severity" className="block text-sm font-medium text-indigo-300">
            Severity
          </label>
          <select
            id="severity"
            name="severity"
            value={formState.severity}
            onChange={handleInputChange}
            className="
              w-full px-4 py-2 rounded-lg 
              bg-gray-800/80 border border-indigo-500/30
              text-white 
              focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500/50
              transition-all duration-300
            "
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        
        <button
          type="submit"
          className="
            flex items-center justify-center gap-2
            w-full px-6 py-3 rounded-lg 
            bg-gradient-to-r from-indigo-600 to-purple-600
            text-white font-medium
            hover:from-indigo-500 hover:to-purple-500
            focus:outline-none focus:ring-2 focus:ring-indigo-500/50
            shadow-lg shadow-indigo-600/20
            transition-all duration-300
            transform hover:scale-[1.02] active:scale-[0.98]
          "
        >
          <Send className="h-5 w-5" />
          Submit Report
        </button>
      </div>
    </form>
  );
};