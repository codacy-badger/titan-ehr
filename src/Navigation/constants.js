export const sidebarTabs = [
  {
    title: 'Inventory',
    path: '/inventory',
  },
  {
    title: 'Patients',
    path: '/patients',
  },
  {
    title: 'Scheduling',
    path: '/scheduling',
  },
  {
    title: 'Imaging',
    path: '/imaging',
  },
  {
    title: 'Medication',
    path: '/medication',
  },
  {
    title: 'Labs',
    path: '/labs',
  },
  {
    title: 'Billing',
    path: '/billing',
  },
  {
    title: 'Incident',
    path: '/incident',
  },
  {
    title: 'Administration',
    path: '/administration',
  },
];

export const subMenus = {
  Inventory: [
    {
      title: 'Requests',
      path: '/inventory/requests',
    },
    {
      title: 'Items',
      path: '/inventory/items',
    },
    {
      title: 'Inventory Received',
      path: '/inventory/received',
    },
    {
      title: 'Reports',
      path: '/inventory/reports',
    },
  ],
  Patients: [
    {
      title: 'Patient Listing',
      path: '/patients/listing',
    },
    {
      title: 'Admitted Patients',
      path: '/patients/admitted',
    },
    {
      title: 'Outpatient',
      path: '/patients/outpatient',
    },
    {
      title: 'New Patient',
      path: '/patients/new',
    },
    {
      title: 'Reports',
      path: '/patients/reports',
    },
  ],
  Scheduling: [
    {
      title: 'Add Appointment',
      path: '/scheduling/add',
    },
  ],
  Imaging: [
    {
      title: 'New Reuqest',
      path: '/imaging/new',
    },
  ],
  Medication: [
    {
      title: 'New Request',
      path: '/medication/new',
    },
  ],
  Labs: [
    {
      title: 'New Request',
      path: '/labs/new',
    },
  ],
  Billing: [
    {
      title: 'New Invoice',
      path: '/billing/new',
    },
  ],
  Incidents: [
    {
      title: 'New Incident',
      path: '/incidents/new',
    },
  ],
  Administration: [
    {
      title: 'Shortcodes',
      path: '/admin/shortcodes',
    },
  ],
};
