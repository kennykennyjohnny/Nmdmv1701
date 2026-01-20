import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Music2, Heart, Church, Menu, X, Check, BookOpen, ArrowRight, Calendar, FileText, Users, Sparkles, Mail, User, ChevronRight, Award, Zap, Share2, LogIn, UserPlus, Shield, Info, Upload } from 'lucide-react';

type AccountType = 'couple' | 'musicien' | 'paroisse' | '';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');
  const [modalOpen, setModalOpen] = useState<'couple' | 'paroisse' | 'musicien' | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        scrollToSection(id);
      }, 100);
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = ['accueil', 'futurs-maries', 'paroisses', 'musiciens', 'bibliotheque', 'a-propos'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const GITHUB_RAW = 'https://raw.githubusercontent.com/kennykennyjohnny/Nmdm-Vraph/main';

  const menuItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'futurs-maries', label: 'Futurs Mariés' },
    { id: 'paroisses', label: 'Paroisses' },
    { id: 'musiciens', label: 'Musiciens' },
    { id: 'bibliotheque', label: 'Bibliothèque' },
    { id: 'a-propos', label: 'À propos' }
  ];

  const modalContent = {
    couple: {
      title: 'Futurs Mariés',
      price: '49,90€',
      oldPrice: '',
      subtitle: 'Paiement unique • Accès 13 mois',
      icon: Heart,
      gradient: 'from-[#FF8100] to-[#ff6b6b]',
      features: [
        { title: 'Bibliothèque complète', desc: 'Accès à 500+ chants, 100+ textes bibliques et 50+ prières liturgiques conformes' },
        { title: 'Livret de messe PDF', desc: 'Génération automatique professionnelle avec mise en page personnalisable' },
        { title: 'Collaboration musiciens', desc: 'Partagez votre projet avec vos musiciens en temps réel' },
        { title: 'Validation paroisse', desc: 'Soumettez vos choix à votre paroisse pour validation liturgique' },
        { title: 'Calendrier intégré', desc: 'Organisez toutes les étapes de votre préparation' },
        { title: 'Export & partage', desc: 'Téléchargez et partagez facilement votre livret' },
        { title: 'Support dédié', desc: 'Assistance par email pour toutes vos questions' },
        { title: 'Mises à jour gratuites', desc: 'Profitez de toutes les nouvelles fonctionnalités' }
      ]
    },
    paroisse: {
      title: 'Paroisses',
      price: 'GRATUIT',
      oldPrice: '',
      subtitle: 'Toujours gratuit pour l\'Église',
      icon: Church,
      gradient: 'from-green-500 to-green-600',
      features: [
        { title: 'Tableau de bord complet', desc: 'Vue d\'ensemble de tous les mariages de votre paroisse' },
        { title: 'Validation liturgique', desc: 'Vérifiez et validez chaque choix de chant, texte et prière' },
        { title: 'Bibliothèque personnalisable', desc: 'Ajoutez les chants spécifiques à votre diocèse' },
        { title: 'Gestion des couples', desc: 'Suivez l\'avancement de chaque couple' },
        { title: 'Communication directe', desc: 'Échangez avec les couples via la messagerie intégrée' },
        { title: 'Historique complet', desc: 'Archivez tous les mariages célébrés' },
        { title: 'Export de données', desc: 'Téléchargez les livrets et statistiques' },
        { title: 'Multi-utilisateurs', desc: 'Ajoutez plusieurs comptes pour votre équipe pastorale' }
      ]
    },
    musicien: {
      title: 'Musiciens',
      price: '9,90€/mois',
      oldPrice: '',
      subtitle: 'Version gratuite disponible',
      icon: Music2,
      gradient: 'from-[#FF8100] to-[#ff6b6b]',
      features: [
        { title: 'Répertoire personnel', desc: 'Créez et organisez votre bibliothèque de chants (gratuit)' },
        { title: 'PDF partitions auto', desc: 'Génération automatique de vos partitions (gratuit)' },
        { title: 'Planning centralisé', desc: 'Gérez tous vos mariages au même endroit (PRO)' },
        { title: 'Import partitions', desc: 'Importez vos propres partitions PDF (PRO)' },
        { title: 'Collaboration couples', desc: 'Recevez les demandes et validez les choix (PRO)' },
        { title: 'Gestion équipe', desc: 'Coordonnez votre ensemble musical (PRO)' },
        { title: 'Statistiques', desc: 'Suivez vos prestations et revenus (PRO)' },
        { title: 'Export professionnel', desc: 'Livrets avec votre branding (PRO)' }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-[#652D90]">
      {/* Navigation COMPACTE */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#652D90]/98 backdrop-blur-xl shadow-xl border-b border-white/10' : 'bg-[#652D90]/90 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex justify-between items-center h-16">
            <button onClick={() => scrollToSection('accueil')} className="group">
              <img 
                src={`${GITHUB_RAW}/images/logo_avectexte_horizontal.png`}
                alt="Notre Messe de Mariage" 
                className="h-10 w-auto brightness-0 invert transition-transform group-hover:scale-105"
              />
            </button>

            <div className="hidden lg:flex items-center gap-6">
              {menuItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative text-sm font-medium transition-all pb-1 ${
                    activeSection === item.id ? 'text-[#FF8100]' : 'text-white/90 hover:text-white'
                  }`}
                  style={{ fontFamily: "'Avenir LT Pro', sans-serif" }}>
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-[#FF8100] rounded-full"></span>
                  )}
                </button>
              ))}
              
              <div className="flex items-center gap-2">
                <button className="text-white/90 hover:text-white px-3 py-1.5 text-sm font-medium transition">
                  Connexion
                </button>
                <button 
                  onClick={() => window.location.href = 'https://app.notremessedemariage.fr'}
                  className="bg-gradient-to-r from-[#FF8100] to-[#ff6b6b] text-white px-4 py-1.5 rounded-lg text-sm font-bold hover:shadow-lg transition">
                  Créer un compte
                </button>
              </div>
            </div>

            <div className="lg:hidden flex items-center gap-2">
              <button 
                onClick={() => window.location.href = 'https://app.notremessedemariage.fr'}
                className="bg-gradient-to-r from-[#FF8100] to-[#ff6b6b] text-white p-2 rounded-lg">
                <UserPlus className="w-4 h-4" />
              </button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-2">
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden pb-3 space-y-1 border-t border-white/10 mt-2 pt-3">
              {menuItems.map((item) => (
                <button 
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left py-2 px-3 rounded-lg text-sm transition ${
                    activeSection === item.id ? 'bg-white/20 text-white font-bold' : 'text-white/90 hover:bg-white/10'
                  }`}>
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* SECTION ACCUEIL */}
      <section id="accueil" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#652D90] via-[#7d3ba8] to-[#8b4ab8]"></div>
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#FF8100] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-[#E6DEF6] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF8100] to-[#ff6b6b] text-white px-4 py-1.5 rounded-full mb-6 text-xs font-bold shadow-lg">
              <Sparkles className="w-3 h-3" />
              <span style={{ fontFamily: "'Avenir LT Pro', sans-serif" }}>Plateforme n°1 de préparation liturgique</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" 
                style={{ fontFamily: "'Alfarn', Georgia, serif" }}>
              Préparez votre{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8100] to-[#ff6b6b]">
                Messe de Mariage
              </span>
              <br />
              <span className="text-white/95">en toute sérénité</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto" 
               style={{ fontFamily: "'Avenir LT Pro', sans-serif" }}>
              Connectez <strong className="text-[#FF8100]">couples</strong>, <strong className="text-[#FF8100]">musiciens</strong> et <strong className="text-[#FF8100]">paroisses</strong> pour créer des célébrations conformes et inoubliables.
            </p>

            <div className="relative max-w-4xl mx-auto mb-10 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FF8100] via-[#652D90] to-[#FF8100] rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-white/10">
                <img 
                  src={`${GITHUB_RAW}/images/NDM_paris.jpg`}
                  alt="Notre-Dame"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=90';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#652D90]/50 to-transparent"></div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <button 
                onClick={() => window.location.href = 'https://app.notremessedemariage.fr'}
                className="group bg-gradient-to-r from-[#FF8100] to-[#ff6b6b] text-white px-8 py-3 rounded-full text-base font-bold shadow-xl hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center gap-2">
                <span style={{ fontFamily: "'Alfarn', Georgia, serif" }}>Créer mon compte</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => scrollToSection('bibliotheque')}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3 rounded-full text-base font-bold border border-white/30 transition-all hover:scale-105 inline-flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                Bibliothèque
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION FUTURS MARIÉS */}
      <section id="futurs-maries" className="py-16 px-4 bg-gradient-to-br from-[#652D90] via-[#7d3ba8] to-[#652D90]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex w-14 h-14 bg-gradient-to-br from-[#FF8100] to-[#ff6b6b] rounded-xl items-center justify-center mb-4 shadow-lg">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-3" style={{ fontFamily: "'Alfarn', Georgia, serif" }}>
              Futurs Mariés
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto" style={{ fontFamily: "'Avenir LT Pro', sans-serif" }}>
              Préparez votre messe sereinement avec tous les outils nécessaires
            </p>
          </div>

          {/* CARD AVEC PHOTO */}
          <div className="group relative bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-white/20 hover:border-[#FF8100]/50 hover:scale-[1.02] transition-all duration-500">
            {/* Photo */}
            <div className="relative h-64 overflow-hidden">
              <img 
                src={`${GITHUB_RAW}/images/horizontal1.jpg`}
                alt="Couple"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=90';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#652D90] via-[#652D90]/50 to-transparent"></div>
              <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-[#FF8100] to-[#ff6b6b] rounded-xl flex items-center justify-center shadow-xl">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div className="absolute top-4 right-4 bg-[#FF8100] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                POPULAIRE
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  { icon: BookOpen, title: 'Bibliothèque complète', desc: 'Chants, textes et prières' },
                  { icon: FileText, title: 'Livret PDF pro', desc: 'Génération automatique' },
                  { icon: Users, title: 'Collaboration', desc: 'Musiciens et paroisse' },
                  { icon: Calendar, title: 'Suivi projet', desc: 'Calendrier intégré' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:border-[#FF8100]/30 transition">
                    <div className="w-9 h-9 bg-gradient-to-br from-[#FF8100] to-[#ff6b6b] rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm mb-0.5" style={{ fontFamily: "'Alfarn', Georgia, serif" }}>
                        {item.title}
                      </h4>
                      <p className="text-xs text-white/70" style={{ fontFamily: "'Avenir LT Pro', sans-serif" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between bg-gradient-to-r from-[#FF8100] to-[#ff6b6b] rounded-xl p-4 mb-3">
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl font-bold text-white" style={{ fontFamily: "'Alfarn', Georgia, serif" }}>49,90€</span>
                  </div>
                  <p className="text-xs text-white/90">Paiement unique • Accès à vie à son mariage</p>
                </div>
                <button 
                  onClick={() => window.location.href = 'https://app.notremessedemariage.fr'}
                  className="bg-white text-[#FF8100] px-6 py-2.5 rounded-lg font-bold hover:bg-gray-50 transition text-sm shadow-lg">
                  Créer mon compte
                </button>
              </div>

              <button 
                onClick={() => setModalOpen('couple')}
                className="w-full text-white/80 hover:text-white text-sm font-medium flex items-center justify-center gap-2 py-2 transition">
                <Info className="w-4 h-4" />
                En savoir plus sur l'offre
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION PAROISSES */}
      <section id="paroisses" className="py-16 px-4 bg-gradient-to-br from-[#E6DEF6] to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex w-14 h-14 bg-gradient-to-br from-[#FF8100] to-[#652D90] rounded-xl items-center justify-center mb-4 shadow-lg">
              <Church className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#652D90] mb-3" style={{ fontFamily: "'Alfarn', Georgia, serif" }}>
              Paroisses
            </h2>
            <p className="text-lg text-[#61616F] max-w-2xl mx-auto" style={{ fontFamily: "'Avenir LT Pro', sans-serif" }}>
              Centralisez et validez tous vos mariages efficacement
            </p>
          </div>

          {/* CARD AVEC PHOTO */}
          <div className="group relative bg-white rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-100 hover:border-[#FF8100]/30 hover:scale-[1.02] transition-all duration-500">
            {/* Photo */}
            <div className="relative h-64 overflow-hidden">
              <img 
                src={`${GITHUB_RAW}/images/vertical1.jpg`}
                alt="Église"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1464047736614-af63643285bf?w=800&q=90';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#652D90]/60 via-[#652D90]/20 to-transparent"></div>
              <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-xl">
                <Church className="w-6 h-6 text-[#652D90]" />
              </div>
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                100% GRATUIT
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  { icon: Users, title: 'Tableau de bord', desc: 'Vue complète mariages' },
                  { icon: Check, title: 'Validation', desc: 'Contrôle liturgique' },
                  { icon: BookOpen, title: 'Bibliothèque', desc: 'Personnalisable' },
                  { icon: Mail, title: 'Communication', desc: 'Contact couples' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 bg-gray-50 rounded-lg p-3 border border-gray-100 hover:border-[#FF8100]/30 transition">
                    <div className="w-9 h-9 bg-gradient-to-br from-[#FF8100] to-[#652D90] rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#652D90] text-sm mb-0.5" style={{ fontFamily: "'Alfarn', Georgia, serif" }}>
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#61616F]" style={{ fontFamily: "'Avenir LT Pro', sans-serif" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-4">
                <div>
                  <div className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "'Alfarn', Georgia, serif" }}>
                    GRATUIT
                  </div>
                  <p className="text-xs text-white/90">Toujours gratuit pour l'Église</p>
                </div>
                <button 
                  onClick={() => window.location.href = 'https://app.notremessedemariage.fr'}
                  className="bg-white text-green-600 px-6 py-2.5 rounded-lg font-bold hover:bg-gray-50 transition text-sm shadow-lg">
                  Créer mon compte
                </button>
              </div>

              <button 
                onClick={() => setModalOpen('paroisse')}
                className="w-full text-[#61616F] hover:text-[#652D90] text-sm font-medium flex items-center justify-center gap-2 py-2 transition">
                <Info className="w-4 h-4" />
                En savoir plus sur l'offre
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION MUSICIENS */}
      <section id="musiciens" className="py-16 px-4 bg-gradient-to-br from-[#652D90] via-[#7d3ba8] to-[#652D90]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex w-14 h-14 bg-gradient-to-br from-[#FF8100] to-[#ff6b6b] rounded-xl items-center justify-center mb-4 shadow-lg">
              <Music2 className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-3" style={{ fontFamily: "'Alfarn', Georgia, serif" }}>
              Musiciens
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto" style={{ fontFamily: "'Avenir LT Pro', sans-serif" }}>
              Professionnalisez votre activité musicale
            </p>
          </div>

          {/* CARD AVEC PHOTO */}
          <div className="group relative bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-white/20 hover:border-[#FF8100]/50 hover:scale-[1.02] transition-all duration-500">
            {/* Photo */}
            <div className="relative h-64 overflow-hidden">
              <img 
                src={`${GITHUB_RAW}/images/Choeur.jpg`}
                alt="Chœur"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=90';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#652D90] via-[#652D90]/50 to-transparent"></div>
              <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-[#FF8100] to-[#ff6b6b] rounded-xl flex items-center justify-center shadow-xl">
                <Music2 className="w-6 h-6 text-white" />
              </div>
              <div className="absolute top-4 right-4 bg-[#FF8100] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                FREEMIUM
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  { text: 'Répertoire perso', free: true },
                  { text: 'PDF partitions', free: true },
                  { text: 'Planning pro', free: false },
                  { text: 'Import partitions', free: false }
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:border-[#FF8100]/30 transition">
                    <Check className={`w-5 h-5 flex-shrink-0 ${item.free ? 'text-green-400' : 'text-[#FF8100]'}`} />
                    <div className="flex-1 flex items-center justify-between">
                      <span className="text-sm text-white">{item.text}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                        item.free ? 'bg-green-400/20 text-green-300 border border-green-400/30' : 'bg-[#FF8100]/20 text-[#FF8100] border border-[#FF8100]/30'
                      }`}>
                        {item.free ? 'GRATUIT' : 'PRO'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                  <div className="text-lg font-bold text-white mb-0.5" style={{ fontFamily: "'Alfarn', Georgia, serif" }}>Gratuit</div>
                  <p className="text-xs text-white/70">Fonctions de base</p>
                </div>
                <div className="bg-gradient-to-br from-[#FF8100] to-[#ff6b6b] rounded-lg p-3 border border-[#FF8100]/30">
                  <div className="text-lg font-bold text-white mb-0.5" style={{ fontFamily: "'Alfarn', Georgia, serif" }}>9,90€/mois</div>
                  <p className="text-xs text-white/90">Premium</p>
                </div>
              </div>

              <button 
                onClick={() => setModalOpen('musicien')}
                className="w-full bg-gradient-to-r from-[#FF8100] to-[#ff6b6b] text-white py-3 rounded-lg font-bold hover:shadow-xl transition text-sm">
                Créer mon compte gratuit
              </button>

              <button 
                onClick={() => setModalOpen('musicien')}
                className="w-full text-white/80 hover:text-white text-sm font-medium flex items-center justify-center gap-2 py-2 transition mt-2">
                <Info className="w-4 h-4" />
                En savoir plus sur l'offre
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION BIBLIOTHÈQUE */}
      <section id="bibliotheque" className="py-16 px-4 bg-gradient-to-br from-[#E6DEF6] to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex w-14 h-14 bg-gradient-to-br from-[#FF8100] to-[#652D90] rounded-xl items-center justify-center mb-4 shadow-lg">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#652D90] mb-3" style={{ fontFamily: "'Alfarn', Georgia, serif" }}>
              Bibliothèque Liturgique
            </h2>
            <p className="text-lg text-[#61616F] max-w-2xl mx-auto" style={{ fontFamily: "'Avenir LT Pro', sans-serif" }}>
              Base complète pour composer votre célébration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { title: 'Chants', count: '500+', icon: Music2, gradient: 'from-[#FF8100] to-[#ff6b6b]', img: 'https://images.unsplash.com/photo-1745852737143-a8b275407f2a?w=600&q=80' },
              { title: 'Textes', count: '100+', icon: FileText, gradient: 'from-[#652D90] to-[#7d3ba8]', img: 'https://images.unsplash.com/photo-1766306252230-d1e3026f4f66?w=600&q=80' },
              { title: 'Prières', count: '50+', icon: Heart, gradient: 'from-[#FF8100] to-[#652D90]', img: 'https://images.unsplash.com/photo-1714381636560-47bca37b5054?w=600&q=80' }
            ].map((cat, i) => (
              <div key={i} className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl border-2 border-gray-100 hover:border-[#FF8100]/30 hover:scale-105 transition-all duration-300">
                {/* Photo background */}
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={cat.img}
                    alt={cat.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-80`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <cat.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#652D90] mb-1" style={{ fontFamily: "'Alfarn', Georgia, serif" }}>
                    {cat.title}
                  </h3>
                  <div className="text-3xl font-bold bg-gradient-to-r from-[#FF8100] to-[#ff6b6b] bg-clip-text text-transparent" style={{ fontFamily: "'Alfarn', Georgia, serif" }}>
                    {cat.count}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#652D90] to-[#7d3ba8] rounded-2xl p-8 text-center shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Alfarn', Georgia, serif" }}>
              Accédez à toute la bibliothèque
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto" style={{ fontFamily: "'Avenir LT Pro', sans-serif" }}>
              Créez un compte pour explorer tous les chants, textes et prières
            </p>
            <button 
              onClick={() => window.location.href = 'https://app.notremessedemariage.fr'}
              className="bg-gradient-to-r from-[#FF8100] to-[#ff6b6b] text-white px-10 py-3 rounded-full font-bold hover:shadow-2xl transition inline-flex items-center gap-2"
              style={{ fontFamily: "'Alfarn', Georgia, serif" }}>
              <span>Créer mon compte</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION À PROPOS */}
      <section id="a-propos" className="py-16 px-4 bg-gradient-to-br from-[#652D90] via-[#7d3ba8] to-[#652D90]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex w-14 h-14 bg-gradient-to-br from-[#FF8100] to-[#ff6b6b] rounded-xl items-center justify-center mb-4 shadow-lg">
              <Info className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-3" style={{ fontFamily: "'Alfarn', Georgia, serif" }}>
              À propos
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: "'Avenir LT Pro', sans-serif" }}>
              Né de notre expérience dans l'animation de mariages catholiques, <strong className="text-[#FF8100]">Notre Messe de Mariage</strong> simplifie la préparation liturgique en connectant tous les acteurs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { icon: Shield, title: 'Conformité', desc: 'Respect liturgie catholique', gradient: 'from-[#FF8100] to-[#ff6b6b]' },
              { icon: Users, title: 'Collaboration', desc: 'Tous acteurs connectés', gradient: 'from-[#652D90] to-[#7d3ba8]' },
              { icon: Sparkles, title: 'Simplicité', desc: 'Interface moderne', gradient: 'from-[#FF8100] to-[#652D90]' }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center border border-white/20 hover:border-[#FF8100]/50 hover:scale-105 transition-all">
                <div className={`inline-flex w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-lg items-center justify-center mb-3 shadow-lg`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white mb-2" style={{ fontFamily: "'Alfarn', Georgia, serif" }}>
                  {item.title}
                </h3>
                <p className="text-sm text-white/80" style={{ fontFamily: "'Avenir LT Pro', sans-serif" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button 
              onClick={() => window.location.href = 'https://app.notremessedemariage.fr'}
              className="bg-gradient-to-r from-[#FF8100] to-[#ff6b6b] text-white px-12 py-4 rounded-full font-bold hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center gap-3 text-lg"
              style={{ fontFamily: "'Alfarn', Georgia, serif" }}>
              <UserPlus className="w-6 h-6" />
              <span>Créer / Se connecter</span>
              <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2C2C] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <img 
              src={`${GITHUB_RAW}/images/logo_avectexte_horizontal.png`}
              alt="Logo"
              className="h-8 brightness-0 invert mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Plateforme collaborative pour la préparation de messes de mariage. Développée avec passion pour faciliter la vie des couples, musiciens et paroisses.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-[#FF8100] text-sm" style={{ fontFamily: "'Alfarn', Georgia, serif" }}>
              Navigation
            </h4>
            <ul className="space-y-2">
              {menuItems.map(item => (
                <li key={item.id}>
                  <button 
                    onClick={() => scrollToSection(item.id)}
                    className="text-gray-400 hover:text-[#FF8100] transition text-sm">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-[#FF8100] text-sm" style={{ fontFamily: "'Alfarn', Georgia, serif" }}>
              Légal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/legal#mentions" className="text-gray-400 hover:text-[#FF8100] transition text-sm">Mentions légales</Link>
              </li>
              <li>
                <Link to="/legal#cgu" className="text-gray-400 hover:text-[#FF8100] transition text-sm">CGU</Link>
              </li>
              <li>
                <a href="mailto:contact@notremessedemariage.fr" className="text-gray-400 hover:text-[#FF8100] transition text-sm">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-xs">
          © 2025 Notre Messe de Mariage • Tous droits réservés
        </div>
      </footer>

      {/* MODAL DÉTAILS OFFRE */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn" onClick={() => setModalOpen(null)}>
          <div className="bg-gradient-to-br from-[#652D90] via-[#7d3ba8] to-[#652D90] rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-white/20" onClick={(e) => e.stopPropagation()}>
            
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-[#FF8100] to-[#ff6b6b] p-6 rounded-t-3xl">
              <button onClick={() => setModalOpen(null)} className="absolute top-4 right-4 text-white/80 hover:text-white transition p-2">
                <X className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  {modalOpen === 'couple' && <Heart className="w-7 h-7 text-white" />}
                  {modalOpen === 'musicien' && <Music2 className="w-7 h-7 text-white" />}
                  {modalOpen === 'paroisse' && <Church className="w-7 h-7 text-white" />}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white" style={{ fontFamily: "'Alfarn', Georgia, serif" }}>
                    {modalOpen === 'couple' && 'Offre Futurs Mariés'}
                    {modalOpen === 'musicien' && 'Offre Musiciens'}
                    {modalOpen === 'paroisse' && 'Offre Paroisses'}
                  </h3>
                  <p className="text-white/90 text-sm">Détails complets de l'offre</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              
              {/* COUPLES */}
              {modalOpen === 'couple' && (
                <>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h4 className="text-xl font-bold text-[#FF8100] mb-4 flex items-center gap-2" style={{ fontFamily: "'Alfarn', Georgia, serif" }}>
                      <Award className="w-5 h-5" />
                      Fonctionnalités incluses
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        'Bibliothèque complète de chants liturgiques',
                        'Tous les textes bibliques approuvés',
                        'Prières et intentions personnalisables',
                        'Générateur de livret PDF professionnel',
                        'Mise en page automatique élégante',
                        'Export PDF illimité',
                        'Invitation des musiciens',
                        'Partage du répertoire en temps réel',
                        'Validation paroisse intégrée',
                        'Historique des modifications',
                        'Accès mobile responsive',
                        'Support email prioritaire'
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-white/90 text-sm">
                          <Check className="w-4 h-4 text-[#FF8100] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h4 className="text-xl font-bold text-[#FF8100] mb-4" style={{ fontFamily: "'Alfarn', Georgia, serif" }}>
                      Comment ça marche ?
                    </h4>
                    <div className="space-y-3">
                      {[
                        { num: '1', title: 'Créez votre compte', desc: 'Inscription gratuite en 2 minutes' },
                        { num: '2', title: 'Explorez la plateforme', desc: 'Parcourez la bibliothèque et les fonctionnalités' },
                        { num: '3', title: 'Activez l\'accès complet', desc: '49,90€ (ou 39,90€ via paroisse/musicien)' },
                        { num: '4', title: 'Préparez votre messe', desc: '13 mois d\'accès pour tout préparer sereinement' }
                      ].map((step, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="w-8 h-8 bg-gradient-to-br from-[#FF8100] to-[#ff6b6b] rounded-full flex items-center justify-center font-bold text-white flex-shrink-0">
                            {step.num}
                          </div>
                          <div>
                            <h5 className="font-bold text-white mb-1">{step.title}</h5>
                            <p className="text-white/70 text-sm">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-[#FF8100] to-[#ff6b6b] rounded-xl p-6 text-white">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-4xl font-bold" style={{ fontFamily: "'Alfarn', Georgia, serif" }}>49,90€</span>
                    </div>
                    <p className="text-white/90 mb-4">Paiement unique • Accès 13 mois • Sans engagement</p>
                    <button 
                      onClick={() => window.location.href = 'https://app.notremessedemariage.fr'}
                      className="w-full bg-white text-[#FF8100] py-3 rounded-xl font-bold hover:bg-gray-50 transition shadow-lg">
                      Créer mon compte maintenant
                    </button>
                  </div>
                </>
              )}

              {/* MUSICIENS */}
              {modalOpen === 'musicien' && (
                <>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">GRATUIT</div>
                        <h4 className="font-bold text-white text-lg" style={{ fontFamily: "'Alfarn', Georgia, serif" }}>Version Gratuite</h4>
                      </div>
                      <ul className="space-y-2">
                        {[
                          'Répertoire personnel illimité',
                          'Gestion des chants par mariage',
                          'PDF fiches chants automatiques',
                          'Partage avec couples',
                          'Accès bibliothèque complète'
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-white/90 text-sm">
                            <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-[#FF8100]/20 to-[#ff6b6b]/20 backdrop-blur-sm rounded-xl p-5 border-2 border-[#FF8100]/40">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="bg-[#FF8100] text-white px-2 py-1 rounded-full text-xs font-bold">PREMIUM</div>
                        <h4 className="font-bold text-white text-lg" style={{ fontFamily: "'Alfarn', Georgia, serif" }}>9,90€/mois</h4>
                      </div>
                      <p className="text-[#FF8100] font-bold text-sm mb-3">Tout Gratuit +</p>
                      <ul className="space-y-2">
                        {[
                          'Planning centralisé multi-mariages',
                          'Import de vos partitions perso',
                          'Gestion financière intégrée',
                          'Factures automatiques',
                          'Statistiques détaillées',
                          'Support prioritaire',
                          'Badge "Musicien Pro"'
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-white text-sm">
                            <Check className="w-4 h-4 text-[#FF8100] flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h4 className="text-xl font-bold text-[#FF8100] mb-4" style={{ fontFamily: "'Alfarn', Georgia, serif" }}>
                      Pourquoi choisir Premium ?
                    </h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        { icon: Calendar, title: 'Gain de temps', desc: 'Planning auto, plus d\'Excel' },
                        { icon: FileText, title: 'Professionnel', desc: 'Factures & suivi finances' },
                        { icon: Upload, title: 'Personnalisation', desc: 'Vos propres partitions' },
                        { icon: Award, title: 'Visibilité', desc: 'Badge professionnel' }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-[#FF8100] to-[#ff6b6b] rounded-lg flex items-center justify-center flex-shrink-0">
                            <item.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h5 className="font-bold text-white text-sm mb-1">{item.title}</h5>
                            <p className="text-white/70 text-xs">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-[#FF8100] to-[#ff6b6b] rounded-xl p-6 text-white">
                    <p className="text-white/90 mb-4">Commencez gratuitement, upgradeez quand vous voulez</p>
                    <button 
                      onClick={() => window.location.href = 'https://app.notremessedemariage.fr'}
                      className="w-full bg-white text-[#FF8100] py-3 rounded-xl font-bold hover:bg-gray-50 transition shadow-lg">
                      Créer mon compte gratuit
                    </button>
                  </div>
                </>
              )}

              {/* PAROISSES */}
              {modalOpen === 'paroisse' && (
                <>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h4 className="text-xl font-bold text-[#FF8100] mb-4 flex items-center gap-2" style={{ fontFamily: "'Alfarn', Georgia, serif" }}>
                      <Award className="w-5 h-5" />
                      Fonctionnalités complètes
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        'Tableau de bord multi-mariages',
                        'Vue calendrier annuelle',
                        'Gestion équipe paroissiale',
                        'Multi-utilisateurs illimités',
                        'Validation liturgique guidée',
                        'Commentaires sur les choix',
                        'Bibliothèque diocésaine perso',
                        'Ajout chants locaux',
                        'Messagerie couples intégrée',
                        'Notifications automatiques',
                        'Export statistiques annuelles',
                        'Support technique dédié'
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-white/90 text-sm">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h4 className="text-xl font-bold text-[#FF8100] mb-4" style={{ fontFamily: "'Alfarn', Georgia, serif" }}>
                      Pourquoi c'est gratuit ?
                    </h4>
                    <p className="text-white/90 leading-relaxed mb-4">
                      <strong className="text-white">Notre mission est d'accompagner l'Église.</strong> Nous croyons que faciliter la préparation des mariages catholiques est un service à la communauté. C'est pourquoi l'accès paroisse est et restera toujours <strong className="text-green-400">100% gratuit</strong>, sans limitation et sans frais cachés.
                    </p>
                    <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="w-5 h-5 text-green-400" />
                        <span className="font-bold text-green-400">Engagement</span>
                      </div>
                      <ul className="space-y-1 text-white/90 text-sm">
                        <li>✓ Aucun frais maintenant ou plus tard</li>
                        <li>✓ Aucune carte bancaire demandée</li>
                        <li>✓ Support et mises à jour inclus</li>
                        <li>✓ Toutes les fonctionnalités</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Check className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">100% GRATUIT</div>
                        <div className="text-white/90 text-sm">À vie, pour toutes les paroisses</div>
                      </div>
                    </div>
                    <button 
                      onClick={() => window.location.href = 'https://app.notremessedemariage.fr'}
                      className="w-full bg-white text-green-600 py-3 rounded-xl font-bold hover:bg-gray-50 transition shadow-lg">
                      Créer mon compte paroisse
                    </button>
                  </div>
                </>
              )}

            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
      `}</style>
    </div>
  );
}