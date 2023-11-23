export type eventtypes = {
  id: number;
  description: string;
  date: string;
  event_name: string;
  location: string;
  organisedby: string;
};

export type usertypes = {
  id: number;
  username: string;
  role: string;
  departmentname: string;
};

export type membertypes = {
  member_id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  department_name: string;
  attendances: string;
};
