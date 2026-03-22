import { motion } from 'motion/react';
import { Mail, Linkedin, Instagram, MessageCircle, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="space-y-12">
      
      {/* HEADER */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
        <p className="text-white/60">
          Interested in working together or discussing a project? Let’s connect.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* LEFT SIDE */}
        <div className="space-y-8">
          
          {/* CONTACT INFO */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Contact Information</h3>

            <div className="space-y-4">
              
              {/* EMAIL */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/40 uppercase tracking-widest">Email</div>
                  <a
                    href="mailto:sangeetshaw39@gmail.com?subject=Project Inquiry&body=Hi Sangeet, I would like to discuss a project with you."
                    className="text-white hover:underline"
                  >
                    sangeetshaw39@gmail.com
                  </a>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-white/40 uppercase tracking-widest">Phone</div>
                  <div className="text-white">+91 62894 77287</div>
                </div>
              </div>

            </div>
          </div>

          {/* SOCIAL */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Social Presence</h3>

            <div className="flex gap-4">
              
              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/sangeet-shaw-753148348/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-indigo-500/50 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/sangeetshaw_i/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-indigo-500/50 transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>

            </div>
          </div>

        </div>

        {/* RIGHT SIDE (ACTION PANEL) */}
        <div className="space-y-6 p-8 rounded-2xl bg-white/5 border border-white/10">

          {/* WHAT I DO */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">What I Can Help You With</h3>

            <ul className="space-y-3 text-white/70">
              <li>• Automating billing & inventory systems</li>
              <li>• Building dashboards (Power BI / Excel)</li>
              <li>• Data analysis for business decisions</li>
              <li>• MSME digital transformation</li>
              <li>• AI-driven workflow optimization</li>
            </ul>
          </div>

          {/* WHATSAPP BUTTON */}
          <a
            href="https://wa.me/916289477287"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition-all flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>

          {/* RESUME BUTTON */}
          <a
            href="/assets/sangeetshawresume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-indigo-500 text-white font-bold rounded-xl hover:bg-indigo-600 transition-all flex items-center justify-center gap-2"
          >
            View Resume
          </a>

        </div>

      </div>
    </div>
  );
}