import { Component } from '@angular/core';

@Component({
  selector: 'app-why-signet',
  templateUrl: './why-signet.component.html',
  styleUrl: './why-signet.component.less'
})
export class WhySignetComponent {
  advantages = [
    {
      number: '1',
      title: 'Full Statutory Compliance',
      description: 'Registered under PF, ESI, and GST. All labour law obligations are met, protecting you from legal liability.'
    },
    {
      number: '2',
      title: 'Trained & Verified Personnel',
      description: 'Every deployment undergoes background verification and role-specific training before day one on site.'
    },
    {
      number: '3',
      title: 'Operational Reliability',
      description: 'Consistent attendance, disciplined conduct, and on-ground supervision ensure zero productivity gaps.'
    },
    {
      number: '4',
      title: 'A Profit Centre, Not a Cost',
      description: 'Theft prevention, productivity gains, and reduced attrition deliver measurable ROI for your organisation.'
    },
    {
      number: '5',
      title: 'Responsive Client Support',
      description: 'Dedicated relationship management. Requests addressed promptly — no bureaucratic delays.'
    },
    {
      number: '6',
      title: 'Continuous Improvement',
      description: 'Regular performance reviews, refresher training, and process upgrades keep standards industry-leading.'
    }
  ];

  industries = [
    'Manufacturing & Industrial',
    'Warehousing & Logistics',
    'IT Parks & Corporate Offices',
    'Healthcare & Hospitals',
    'Retail & Commercial Malls',
    'Export & Apparel Units',
    'Food & Beverage',
    'Pharma & Medical Devices',
    'Engineering & Fabrication',
    'Residential Societies'
  ];

  compliance = [
    { label: 'PF Number', value: 'GNGGN1950444000' },
    { label: 'ESI Number', value: '69000638500001018' },
    { label: 'GST Registered', value: 'Yes — Active' },
    { label: 'Operating Since', value: '10+ Years' }
  ];
}
