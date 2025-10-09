'use client';

// Icons removed per brand guideline
import ServiceHero from '@/components/rmi/ServiceHero';
import ServiceOfferings from '@/components/rmi/ServiceOfferings';
import ServiceProcess from '@/components/rmi/ServiceProcess';
import ServiceCTA from '@/components/rmi/ServiceCTA';

const RiskManagementPage = () => {
  const offerings = [
    {
      title: "Threat & Vulnerability Assessments",
      description:
        "Comprehensive evaluation of potential risks to your organization, assets, and personnel.",
      // icon removed
      details: [
        "Physical security assessments of facilities and operations",
        "Personnel threat profiling and background verification",
        "Operational vulnerability analysis and gap identification",
        "Geopolitical risk evaluation for international operations",
      ],
    },
    {
      title: "Strategic Risk Consulting",
      description:
        "Expert guidance on risk mitigation strategies and security planning.",
      // icon removed
      details: [
        "Risk management framework development",
        "Security policy creation and implementation",
        "Threat landscape analysis and monitoring",
        "Strategic security planning and budgeting",
      ],
    },
    {
      title: "Embedded Risk Advisors",
      description:
        "Dedicated risk management professionals integrated into your operations.",
      // icon removed
      details: [
        "On-site risk management specialists",
        "Real-time threat assessment and response",
        "Security protocol development and training",
        "Continuous risk monitoring and reporting",
      ],
    },
    {
      title: "Crisis & Contingency Management",
      description:
        "Comprehensive crisis response planning and emergency management protocols.",
      // icon removed
      details: [
        "Crisis response plan development",
        "Emergency evacuation procedures",
        "Business continuity planning",
        "Crisis communication strategies",
      ],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Assessment",
      description:
        "Comprehensive risk and threat analysis using advanced methodologies and intelligence gathering.",
      icon: undefined as any,
    },
    {
      step: "02",
      title: "Analysis",
      description:
        "Strategic evaluation and planning based on identified vulnerabilities and threat landscape.",
      icon: undefined as any,
    },
    {
      step: "03",
      title: "Implementation",
      description:
        "Deployment of tailored risk mitigation measures and security protocols.",
      icon: undefined as any,
    },
    {
      step: "04",
      title: "Monitoring",
      description:
        "Continuous oversight, alignment, and optimization of security measures.",
      icon: undefined as any,
    },
  ];

  return (
    <div className="min-h-screen pt-20 bg-[#1a1a1a] text-white antialiased">
      <ServiceHero
        // icon removed
        title="Risk Management"
        subtitle="& Due Diligence"
        description="Protect your business interests and ensure business continuity."
        primaryButtonText="Arrange a Private Consultation"
        secondaryButtonText="Download Capability Brief"
        accentColor="valentor-red"
      />

      <ServiceOfferings
        title="Our Risk Management Services"
        description="Tailored risk management solutions designed to identify, assess, and mitigate threats before they impact your operations."
        offerings={offerings}
        accentColor="valentor-red"
      />

      <ServiceProcess
        title="Our Proven Process"
        description="A systematic approach to risk management that ensures comprehensive coverage and effective threat mitigation through our four-phase methodology."
        process={process}
        accentColor="valentor-red"
      />

      <ServiceCTA
        title="Protect Your Organization Today"
        description="Don't wait for threats to materialize. Let our risk management experts assess your security posture and develop a comprehensive protection strategy tailored to your unique requirements."
        primaryButtonText="Enlist Our Expertise"
        secondaryButtonText="Request Assessment"
        accentColor="valentor-red"
      />
    </div>
  );
};

export default RiskManagementPage;