import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  message: z.string().min(10, "Message is required"),
});

export function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Inquiry Sent!",
      description: "We'll get back to you shortly.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h4 className="text-accent font-bold uppercase tracking-widest mb-2">Get In Touch</h4>
          <h2 className="text-4xl font-heading font-bold text-primary mb-4">
            Request a Quote
          </h2>
          <p className="text-muted-foreground text-lg">
            For manufacturing, spare parts, and job work inquiries, feel free to contact us.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info Card */}
          <div className="bg-primary text-white p-10 rounded-lg shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full -mr-16 -mt-16 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20 rounded-full -ml-16 -mb-16 blur-2xl" />

            <h3 className="text-2xl font-heading font-bold mb-8">Contact Information</h3>

            <div className="space-y-8 relative z-10">
              <div className="flex items-start gap-4">
                <div className="bg-accent/20 p-3 rounded-lg text-accent">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-1">Workshop Address</h5>
                  <p className="text-gray-300 leading-relaxed">
                    Rishikesh Building Unit Number 1, Lalit Katta, Dombivli, 421201<br />
                    Thane, Maharashtra
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent/20 p-3 rounded-lg text-accent">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-1">Phone Number</h5>
                  <p className="text-gray-300">+91 7977664056</p>
                  <p className="text-gray-400 text-sm">Mon-Sat 9am to 6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent/20 p-3 rounded-lg text-accent">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-1">Email Address</h5>
                  <p className="text-gray-300">jaiambeengg2017@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent/20 p-3 rounded-lg text-accent">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h5 className="font-bold text-lg mb-1">Working Hours</h5>
                  <p className="text-gray-300">Monday - Saturday</p>
                  <p className="text-gray-400 text-sm">09:00 AM - 07:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} className="bg-gray-50 border-gray-200 h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="+91 00000 00000" {...field} className="bg-gray-50 border-gray-200 h-12" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input placeholder="john@company.com" {...field} className="bg-gray-50 border-gray-200 h-12" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Requirement</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe your job work or spare part requirement..."
                          className="min-h-[120px] bg-gray-50 border-gray-200 resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full h-12 text-lg font-bold bg-accent hover:bg-accent/90 text-white uppercase tracking-wide">
                  Send Inquiry
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
