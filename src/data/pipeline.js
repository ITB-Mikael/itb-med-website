export const pipelineData = [
  {
    asset: 'Siplizumab',
    subtitle: '',
    rows: [
      { indication: 'Kidney Induction Transplant', startCol: 0, endCol: 2, label: '' },
      { indication: 'ALS', startCol: 0, endCol: 2, label: '' },
      { indication: 'Hidradenitis Suppurativa¹', startCol: 0, endCol: 1, label: '' },
      { indication: 'Xenotransplantation²', startCol: 0, endCol: 0, label: 'Decedent' },
    ],
  },
  {
    asset: 'ITB100',
    subtitle: '(Belatacept)',
    rows: [
      { indication: 'Transplant', startCol: 0, endCol: 0, label: '' },
    ],
  },
  {
    asset: 'ITB200',
    subtitle: '(ceduprubart)',
    rows: [
      { indication: 'Transplant & Autoimmune', startCol: 0, endCol: 0, label: '' },
    ],
  },
  {
    asset: 'ITB300',
    subtitle: '(anti-CD117)',
    rows: [
      { indication: 'Transplant', startCol: 0, endCol: 0, label: '' },
    ],
  },
]

export const pipelinePhases = ['Preclinical', 'Phase 1', 'Phase 2a', 'Phase 2b', 'Phase 3']

export const pipelineFootnotes = [
  '¹ Investigator Initiated Study at UAB',
  '² Experimental decedent model at NYU',
]
