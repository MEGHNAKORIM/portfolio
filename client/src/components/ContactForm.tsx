import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateField = (field: keyof FormData, value: string): string => {
    switch (field) {
      case 'name':
        return value.trim().length === 0 ? 'Name is required' : '';
      case 'email':
        return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
      case 'message':
        return value.trim().length < 10 ? 'Message must be at least 10 characters long' : '';
      default:
        return '';
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleBlur = (field: keyof FormData) => {
    const error = validateField(field, formData[field]);
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message)
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you soon.",
      });

      // Reset form
      setFormData({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
      
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-50 p-8 rounded-2xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
            Full Name
          </Label>
          <Input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => handleChange('name', e.target.value)}
            onBlur={() => handleBlur('name')}
            placeholder="Enter your full name"
            className={`w-full ${errors.name ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
          />
          {errors.name && (
            <span className="text-red-500 text-sm mt-1">{errors.name}</span>
          )}
        </div>
        
        <div>
          <Label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
            Email Address
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            onBlur={() => handleBlur('email')}
            placeholder="Enter your email address"
            className={`w-full ${errors.email ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
          />
          {errors.email && (
            <span className="text-red-500 text-sm mt-1">{errors.email}</span>
          )}
        </div>
        
        <div>
          <Label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
            Message
          </Label>
          <Textarea
            id="message"
            rows={6}
            value={formData.message}
            onChange={(e) => handleChange('message', e.target.value)}
            onBlur={() => handleBlur('message')}
            placeholder="Tell me about your project or just say hello!"
            className={`w-full resize-none ${errors.message ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
          />
          {errors.message && (
            <span className="text-red-500 text-sm mt-1">{errors.message}</span>
          )}
        </div>
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-indigo-500 hover:bg-indigo-600 disabled:bg-slate-300 text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
        >
          <span className="flex items-center justify-center gap-2">
            <i className={`fas ${isSubmitting ? 'fa-spinner fa-spin' : 'fa-paper-plane'}`}></i>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </span>
        </Button>
      </form>
    </div>
  );
}
