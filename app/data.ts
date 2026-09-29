export type CaseRecord = {
  id: string;
  type: string;
  amount: string;
  city: string;
  area: string;
  status: "New" | "Under Investigation" | "Monitoring" | "Resolved" | "Closed";
  priority: "Critical" | "High" | "Medium" | "Low";
  prediction: string;
  date: string;
};

export const cases: CaseRecord[] = [
  { id: "CC-1024", type: "UPI Fraud", amount: "₹1,50,000", city: "Jaipur", area: "Vaishali Nagar", status: "Under Investigation", priority: "High", prediction: "Prediction Ready", date: "29 Aug 2026" },
  { id: "CC-1025", type: "Investment Fraud", amount: "₹75,000", city: "Delhi", area: "Rohini", status: "Monitoring", priority: "Medium", prediction: "Prediction Ready", date: "29 Aug 2026" },
  { id: "CC-1026", type: "Phishing", amount: "₹2,10,000", city: "Mumbai", area: "Andheri", status: "Under Investigation", priority: "High", prediction: "Alert Active", date: "28 Aug 2026" },
  { id: "CC-1027", type: "OTP Fraud", amount: "₹48,500", city: "Pune", area: "Hinjewadi", status: "New", priority: "High", prediction: "Pending", date: "28 Aug 2026" },
  { id: "CC-1028", type: "UPI Fraud", amount: "₹96,000", city: "Jaipur", area: "Sodala", status: "Monitoring", priority: "Medium", prediction: "Prediction Ready", date: "27 Aug 2026" },
  { id: "CC-1029", type: "Job Scam", amount: "₹32,000", city: "Lucknow", area: "Gomti Nagar", status: "Resolved", priority: "Low", prediction: "Outcome Added", date: "27 Aug 2026" },
  { id: "CC-1030", type: "Loan App Fraud", amount: "₹1,25,000", city: "Hyderabad", area: "Madhapur", status: "Under Investigation", priority: "Critical", prediction: "Alert Active", date: "26 Aug 2026" },
  { id: "CC-1031", type: "Phishing", amount: "₹62,000", city: "Bengaluru", area: "Whitefield", status: "Monitoring", priority: "Medium", prediction: "Prediction Ready", date: "26 Aug 2026" },
  { id: "CC-1032", type: "UPI Fraud", amount: "₹84,500", city: "Kota", area: "Talwandi", status: "New", priority: "High", prediction: "Pending", date: "25 Aug 2026" },
  { id: "CC-1033", type: "Investment Fraud", amount: "₹3,80,000", city: "Ahmedabad", area: "Navrangpura", status: "Under Investigation", priority: "Critical", prediction: "Alert Active", date: "25 Aug 2026" },
  { id: "CC-1034", type: "Card Fraud", amount: "₹44,000", city: "Chandigarh", area: "Sector 17", status: "Closed", priority: "Low", prediction: "Outcome Added", date: "24 Aug 2026" },
  { id: "CC-1035", type: "OTP Fraud", amount: "₹57,000", city: "Jaipur", area: "Mansarovar", status: "Monitoring", priority: "Medium", prediction: "Prediction Ready", date: "24 Aug 2026" },
  { id: "CC-1036", type: "UPI Fraud", amount: "₹1,10,000", city: "Indore", area: "Vijay Nagar", status: "Under Investigation", priority: "High", prediction: "Prediction Ready", date: "23 Aug 2026" },
  { id: "CC-1037", type: "Job Scam", amount: "₹28,500", city: "Patna", area: "Boring Road", status: "Resolved", priority: "Low", prediction: "Outcome Added", date: "23 Aug 2026" },
  { id: "CC-1038", type: "Phishing", amount: "₹1,92,000", city: "Delhi", area: "Dwarka", status: "Under Investigation", priority: "High", prediction: "Alert Active", date: "22 Aug 2026" },
  { id: "CC-1039", type: "Loan App Fraud", amount: "₹71,000", city: "Nagpur", area: "Dharampeth", status: "Monitoring", priority: "Medium", prediction: "Prediction Ready", date: "22 Aug 2026" },
  { id: "CC-1040", type: "UPI Fraud", amount: "₹53,500", city: "Surat", area: "Adajan", status: "New", priority: "High", prediction: "Pending", date: "21 Aug 2026" },
  { id: "CC-1041", type: "Card Fraud", amount: "₹39,000", city: "Bhopal", area: "Arera Colony", status: "Resolved", priority: "Low", prediction: "Outcome Added", date: "21 Aug 2026" },
  { id: "CC-1042", type: "Investment Fraud", amount: "₹4,20,000", city: "Kolkata", area: "Salt Lake", status: "Under Investigation", priority: "Critical", prediction: "Alert Active", date: "20 Aug 2026" },
  { id: "CC-1043", type: "OTP Fraud", amount: "₹66,000", city: "Jaipur", area: "Civil Lines", status: "Monitoring", priority: "Medium", prediction: "Prediction Ready", date: "20 Aug 2026" },
  { id: "CC-1044", type: "Phishing", amount: "₹91,000", city: "Noida", area: "Sector 62", status: "Under Investigation", priority: "High", prediction: "Prediction Ready", date: "19 Aug 2026" },
  { id: "CC-1045", type: "UPI Fraud", amount: "₹47,500", city: "Jodhpur", area: "Sardarpura", status: "Closed", priority: "Low", prediction: "Outcome Added", date: "19 Aug 2026" },
  { id: "CC-1046", type: "Job Scam", amount: "₹36,000", city: "Gurugram", area: "Sector 44", status: "New", priority: "Medium", prediction: "Pending", date: "18 Aug 2026" },
  { id: "CC-1047", type: "UPI Fraud", amount: "₹1,35,000", city: "Jaipur", area: "Malviya Nagar", status: "Under Investigation", priority: "High", prediction: "Prediction Ready", date: "18 Aug 2026" },
];

export const predictions = [
  { rank: 1, atm: "ATM-104", area: "Vaishali Nagar", probability: 87, priority: "High", time: "10 PM – 12 AM", x: 29, y: 35, withdrawals: 8 },
  { rank: 2, atm: "ATM-221", area: "Sodala", probability: 73, priority: "High", time: "9:30 PM – 11:30 PM", x: 48, y: 52, withdrawals: 5 },
  { rank: 3, atm: "ATM-087", area: "Civil Lines", probability: 61, priority: "Medium", time: "10 PM – 1 AM", x: 62, y: 29, withdrawals: 4 },
  { rank: 4, atm: "ATM-332", area: "Malviya Nagar", probability: 48, priority: "Medium", time: "8 PM – 11 PM", x: 76, y: 68, withdrawals: 3 },
  { rank: 5, atm: "ATM-118", area: "Mansarovar", probability: 39, priority: "Low", time: "9 PM – 12 AM", x: 38, y: 76, withdrawals: 2 },
];

export const intelligenceSources = [
  { name: "NCRP", status: "Potential Match Found", records: "7 related reports", verification: "Requires Verification", tone: "amber" },
  { name: "CFCFRMS / 1930", status: "Complaint Found", records: "₹1,50,000 • Under Action", verification: "Authorized Source / Demo", tone: "cyan" },
  { name: "Bank / FI Intelligence", status: "6 Suspicious Transactions", records: "4 linked accounts • 12 withdrawals", verification: "Synthetic Financial Data", tone: "blue" },
  { name: "Suspect Registry", status: "Potential Identifier Match", records: "4 related cases • 7 reports", verification: "Requires Verification", tone: "amber" },
  { name: "MuleHunter Intelligence", status: "Potential Mule Link", records: "Mule score 82/100", verification: "Requires Investigation", tone: "red" },
  { name: "Historical Case Database", status: "37 Similar Cases", records: "Maximum similarity 91%", verification: "Internal Demo Dataset", tone: "violet" },
  { name: "FINSHIELD Intelligence", status: "12 Intelligence Matches", records: "6 cross-source connections", verification: "Correlated Demo Signal", tone: "green" },
];

export const withdrawalTrend = [
  { day: "22 Aug", amount: 18 }, { day: "23 Aug", amount: 31 }, { day: "24 Aug", amount: 22 },
  { day: "25 Aug", amount: 44 }, { day: "26 Aug", amount: 35 }, { day: "27 Aug", amount: 52 }, { day: "28 Aug", amount: 41 },
];

export const timeDistribution = [
  { time: "6–9 PM", count: 3 }, { time: "9–10 PM", count: 6 }, { time: "10–11 PM", count: 12 },
  { time: "11–12 AM", count: 10 }, { time: "12–2 AM", count: 4 }, { time: "2–6 AM", count: 1 },
];
