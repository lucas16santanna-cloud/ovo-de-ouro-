/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  TrendingUp, 
  Clock, 
  Home, 
  ChefHat, 
  Gift, 
  ShieldCheck, 
  ArrowRight,
  Zap,
  BookOpen,
  DollarSign,
  ChevronDown
} from 'lucide-react';

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    { q: "Como vou receber o acesso?", a: "O acesso é imediato! Assim que seu pagamento for confirmado, você receberá um e-mail com o link para baixar o Ebook e todos os bônus." },
    { q: "Preciso de experiência na cozinha?", a: "Não! O guia foi feito para iniciantes. Explicamos tudo passo a passo, desde o derretimento até a embalagem final." },
    { q: "O pagamento é seguro?", a: "Sim, 100% seguro. Utilizamos as maiores plataformas de pagamento do Brasil, com criptografia de ponta a ponta." },
    { q: "Terei suporte se tiver dúvidas?", a: "Sim! Dentro do material você encontrará nossos canais de contato para tirar qualquer dúvida sobre as receitas." },
    { q: "E se eu não gostar do material?", a: "Você tem 7 dias de garantia incondicional. Se não ficar satisfeita, devolvemos 100% do seu dinheiro sem perguntas." }
  ];
  const scrollToOffer = () => {
    const element = document.getElementById('offer');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fdfaf6] text-[#2d1b1a] font-sans selection:bg-[#d4af37] selection:text-white">
      {/* Top Banner */}
      <div className="bg-[#d4af37] text-white text-center py-2 text-xs md:text-sm font-bold uppercase tracking-widest w-full shadow-sm">
        🔥 Oferta limitada (somente hoje)
      </div>

      {/* SECTION 1: Headline e Gancho */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 bg-white">
        <div className="relative z-10 container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            {/* Badge - Now Above Image */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1 mb-8 rounded-full bg-[#d4af37] text-white text-sm font-bold tracking-wider uppercase">
                Páscoa 2026: Sua Oportunidade de Ouro
              </span>
            </motion.div>

            {/* Image Visual - Now Above Title */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative mb-12"
            >
              <img 
                src="https://i.imgur.com/SPKqFIw.png" 
                alt="E-book Receitas de Ovos de Páscoa" 
                className="w-full max-w-sm md:max-w-md rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              {/* Shadow */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-black/20 blur-xl rounded-[100%]"></div>
            </motion.div>

            {/* Text Content */}
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#2d1b1a] mb-6 leading-tight">
                  Receitas de <span className="text-[#d4af37]">Ovos de Páscoa Personalizados</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto font-light">
                  O Cardápio de Páscoa Completo com <span className="font-bold text-[#2d1b1a]">Recheios Criativos</span>. 
                  Fature de R$ 2.000 a R$ 5.000 em apenas 15 dias.
                </p>
                
                <div className="flex flex-col items-center gap-6">
                  <motion.button
                    onClick={scrollToOffer}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    animate={{ 
                      boxShadow: ["0px 0px 0px rgba(212, 175, 55, 0)", "0px 0px 20px rgba(212, 175, 55, 0.4)", "0px 0px 0px rgba(212, 175, 55, 0)"] 
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="bg-[#d4af37] hover:bg-[#b8962e] text-white px-10 py-5 rounded-full text-xl font-bold flex items-center gap-2 transition-colors cursor-pointer w-full md:w-auto justify-center"
                  >
                    QUERO COMEÇAR A LUCRAR AGORA!
                    <ArrowRight className="w-6 h-6" />
                  </motion.button>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <ShieldCheck className="w-5 h-5 text-[#27ae60]" />
                    <span>Garantia de 7 dias</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white/50 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: Por que vender Ovos de Páscoa? */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Por que este é o melhor negócio para você hoje?</h2>
            <div className="w-24 h-1 bg-[#d4af37] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { icon: <DollarSign className="w-8 h-8" />, title: "Baixíssimo Investimento", desc: "Você não precisa de equipamentos caros. Use o que já tem na sua cozinha." },
              { icon: <TrendingUp className="w-8 h-8" />, title: "Lucro Imediato", desc: "Chocolate tem margens de mais de 200% de lucro por peça." },
              { icon: <Zap className="w-8 h-8" />, title: "Demanda Explosiva", desc: "Na Páscoa, as pessoas procuram por você. O produto se vende sozinho." },
              { icon: <Home className="w-8 h-8" />, title: "Flexibilidade Total", desc: "Trabalhe de casa, perto dos seus filhos, e defina seus horários." },
              { icon: <Clock className="w-8 h-8" />, title: "Aprendizado Rápido", desc: "Em 24h você já terá seu primeiro catálogo pronto para divulgar." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10, boxShadow: "0 10px 30px -10px rgba(212, 175, 55, 0.3)" }}
                className="p-6 rounded-2xl bg-[#fdfaf6] border-2 border-[#d4af37] text-center shadow-sm transition-all duration-300"
              >
                <div className="w-16 h-16 bg-[#d4af37]/10 text-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: O que você vai encontrar no E-book? */}
      <section className="py-24 bg-[#2d1b1a] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src="https://i.imgur.com/4MX2ZhY.png" 
                alt="Conteúdo do E-book" 
                className="rounded-3xl shadow-2xl border-4 border-[#d4af37]/20 w-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Muito mais que um livro de receitas, um plano de negócios.</h2>
              <p className="text-xl text-gray-300 mb-8 italic">Esqueça receitas confusas da internet. Aqui você tem o caminho das pedras:</p>
              
              <ul className="space-y-6">
                {[
                  { title: "Ovos de Colher Gourmet", desc: "As sensações do momento (Pistache, Brownie, Ninho com Nutella)." },
                  { title: "Linha Econômica", desc: "Ovos deliciosos com custo baixo para vender em quantidade." },
                  { title: "Ovos Kids e Personalizados", desc: "O segredo para encantar as mães e garantir encomendas duplas." },
                  { title: "Técnicas de Temperagem", desc: "O guia 'sem erro' para o chocolate não derreter." },
                  { title: "Guia de Armazenamento", desc: "Como produzir antecipadamente sem perder a qualidade." }
                ].map((item, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#d4af37] flex items-center justify-center mt-1">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-[#d4af37]">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Bônus Exclusivos */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Garanta seu Ebook hoje e leve estes bônus exclusivos! 🎁</h2>
            <p className="text-gray-600">Acelere seus resultados com ferramentas profissionais.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div 
              whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -10px rgba(212, 175, 55, 0.3)" }}
              className="relative p-8 rounded-3xl bg-gradient-to-br from-[#fdfaf6] to-white border-2 border-[#d4af37] overflow-hidden text-center shadow-sm transition-all duration-300"
            >
              <div className="absolute top-0 right-0 p-4 bg-[#d4af37] text-white text-xs font-bold uppercase rounded-bl-xl">Grátis</div>
              <Gift className="w-12 h-12 text-[#d4af37] mb-6 mx-auto" />
              <h3 className="text-2xl font-bold mb-4">BÔNUS 1: Planilha de Precificação Inteligente</h3>
              <p className="text-gray-600">Chega de chutar preços! Saiba exatamente quanto cobrar para nunca sair no prejuízo e garantir seu lucro real.</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -10px rgba(212, 175, 55, 0.3)" }}
              className="relative p-8 rounded-3xl bg-gradient-to-br from-[#fdfaf6] to-white border-2 border-[#d4af37] overflow-hidden text-center shadow-sm transition-all duration-300"
            >
              <div className="absolute top-0 right-0 p-4 bg-[#d4af37] text-white text-xs font-bold uppercase rounded-bl-xl">Grátis</div>
              <BookOpen className="w-12 h-12 text-[#d4af37] mb-6 mx-auto" />
              <h3 className="text-2xl font-bold mb-4">BÔNUS 2: Script de Vendas para WhatsApp</h3>
              <p className="text-gray-600">O que dizer para os clientes e como postar nos Stories para esgotar seu estoque em minutos.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Garantia e Oferta */}
      <section id="offer" className="py-24 bg-[#fdfaf6]">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-white p-12 rounded-[3rem] shadow-xl border border-[#eee]">
            <ShieldCheck className="w-20 h-20 text-[#27ae60] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Risco Zero para Você!</h2>
            <p className="text-gray-600 mb-8">
              Eu confio tanto no meu material que te dou <span className="font-bold text-[#2d1b1a]">7 dias de garantia incondicional</span>. 
              Se você abrir o e-book e achar que não é para você, eu devolvo 100% do seu dinheiro. 
              Sem perguntas, sem burocracia.
            </p>

            <div className="mb-10 flex flex-col items-center">
              <p className="text-gray-400 line-through text-xl mb-1">De R$ 97,00</p>
              <p className="text-2xl font-bold text-[#2d1b1a]">Por apenas:</p>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-[#d4af37]">R$</span>
                <span className="text-7xl md:text-8xl font-black text-[#d4af37] tracking-tighter">29,90</span>
              </div>
              <p className="text-sm text-gray-500 mt-2 font-medium">Pagamento único • Acesso vitalício</p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                scale: [1, 1.02, 1],
                boxShadow: ["0px 0px 0px rgba(46, 204, 113, 0)", "0px 0px 25px rgba(46, 204, 113, 0.5)", "0px 0px 0px rgba(46, 204, 113, 0)"] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-full bg-[#2ecc71] hover:bg-[#27ae60] text-white py-6 rounded-2xl text-2xl font-black shadow-lg shadow-[#2ecc71]/20 transition-all cursor-pointer"
            >
              SIM! QUERO MINHA RENDA EXTRA NA PÁSCOA
            </motion.button>

            {/* Customer Testimonials */}
            <div className="mt-12 space-y-6 text-left border-t border-[#eee] pt-8">
              <h4 className="text-center font-bold text-gray-400 uppercase text-xs tracking-widest mb-6">O que dizem nossos alunos</h4>
              
              {[
                { name: "Maria Silva", comment: "Comprei e em 3 dias já recuperei o investimento! As receitas de Ninho com Nutella são maravilhosas.", rating: 5, image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=150&h=150&auto=format&fit=crop" },
                { name: "João Pereira", comment: "Nunca tinha feito chocolate na vida e a temperagem deu certo de primeira com o guia. Já tenho 10 encomendas!", rating: 5, image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&h=150&auto=format&fit=crop" },
                { name: "Ana Souza", comment: "A planilha de precificação é um divisor de águas. Agora sei exatamente quanto estou lucrando por ovo.", rating: 5, image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=150&h=150&auto=format&fit=crop" }
              ].map((testimonial, i) => (
                <div key={i} className="flex gap-4 items-start bg-[#fdfaf6] p-4 rounded-xl border border-black/5">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#d4af37]/20 flex-shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="flex gap-1 mb-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-[#d4af37] text-xs">★</span>
                      ))}
                    </div>
                    <p className="text-sm text-gray-700 italic mb-1">"{testimonial.comment}"</p>
                    <p className="text-xs font-bold text-[#2d1b1a]">{testimonial.name}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="mt-12 pt-8 border-t border-[#eee] text-left">
              <h4 className="text-center font-bold text-gray-400 uppercase text-xs tracking-widest mb-8">Perguntas Frequentes</h4>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div key={i} className="border border-[#eee] rounded-xl overflow-hidden bg-white">
                    <button 
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full p-4 flex items-center justify-between text-left hover:bg-[#fdfaf6] transition-colors"
                    >
                      <span className="font-bold text-[#2d1b1a] text-sm pr-4">{faq.q}</span>
                      <motion.div
                        animate={{ rotate: openFaq === i ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-4 h-4 text-[#d4af37]" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="p-4 pt-0 text-sm text-gray-600 leading-relaxed border-t border-[#eee]/50">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-[#eee] flex flex-col items-center gap-4">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Formas de Pagamento Seguras</p>
              <div className="flex items-center justify-center gap-6">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-6 object-contain" referrerPolicy="no-referrer" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-10 object-contain" referrerPolicy="no-referrer" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo_Pix_Brasil.png/1200px-Logo_Pix_Brasil.png" alt="Pix" className="h-8 object-contain" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#2d1b1a] text-white/40 text-center text-sm border-t border-white/5">
        <div className="container mx-auto px-4">
          <p className="mb-4">© 2026 Receitas de Ovos de Páscoa. Todos os direitos reservados.</p>
          <p className="max-w-2xl mx-auto">
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. 
            Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.
          </p>
        </div>
      </footer>
    </div>
  );
}
