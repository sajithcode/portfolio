import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Mock email send function - replace with actual implementation
export const sendEmail = async (data: ContactFormData): Promise<{ success: boolean; message: string }> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Mock success response
  console.log("Contact form submission:", data);
  
  return {
    success: true,
    message: "Thank you for your message! I'll get back to you soon.",
  };
};
