import { motion } from "framer-motion";
import { Award as AwardIcon, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { awards } from "@/data/awards";

export const Awards = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Awards & <span className="text-primary">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {awards.map((award, index) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border/50">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className="p-3 rounded-full bg-primary flex-shrink-0"
                    >
                      <AwardIcon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg mb-1">
                        {award.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {award.issuer}
                      </p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                        <Calendar className="w-3 h-3" />
                        <span>{award.date}</span>
                      </div>
                      {award.description && (
                        <p className="text-sm text-muted-foreground">
                          {award.description}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
