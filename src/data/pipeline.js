export const pipelineData = [
  {
    asset: 'Siplizumab',
    subtitle: '',
    category: 'Transplant & Immune-mediated Diseases',
    rows: [
      { indication: 'Kidney Induction Transplant', startCol: 0, endCol: 3, label: '' },
      { indication: 'ALS', startCol: 0, endCol: 2, label: '', progress: 0.5 },
      { indication: 'Hidradenitis Suppurativa¹', startCol: 0, endCol: 1, label: '', progress: 0.5 },
      { indication: 'Xenotransplantation²', startCol: 0, endCol: 0, label: 'Decedent' },
    ],
  },
  {
    asset: 'ITB100',
    subtitle: '(Belatacept)',
    category: 'Transplant',
    rows: [
      { indication: 'Transplant', startCol: 0, endCol: 0, label: '', progress: 0.5 },
    ],
  },
  {
    asset: 'ITB200',
    subtitle: '(ceduprubart)',
    category: 'Transplant & Immune-mediated Diseases',
    rows: [
      { indication: 'Transplant & Autoimmune', startCol: 0, endCol: 0, label: '', progress: 0.5 },
    ],
  },
  {
    asset: 'ITB300',
    subtitle: '(anti-CD117)',
    category: 'Transplant',
    rows: [
      { indication: 'Transplant', startCol: 0, endCol: 0, label: '', progress: 0.5 },
    ],
  },
]

export const pipelinePhases = ['Preclinical', 'Phase 1', 'Phase 2a', 'Phase 2b', 'Phase 3']

export const pipelineFootnotes = [
  '¹ Investigator Initiated Study at UAB',
  '² Experimental decedent model at NYU',
]
