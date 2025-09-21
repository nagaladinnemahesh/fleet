import mongoose from "mongoose";
import dotenv from "dotenv";
import Driver from "../models/Driver.js";

dotenv.config();

console.log("Loaded MONGO_URI:", process.env.MONGO_URI);  // 👈 debug line


const mockDrivers = [
    { "name": "Divya Bose", "licenseNo": "LIC10001", "contact": "9876500000", "availability": "Available" },
  { "name": "Sameer Bose", "licenseNo": "LIC10002", "contact": "9876500001", "availability": "Unavailable" },
  { "name": "Rahul Singh", "licenseNo": "LIC10003", "contact": "9876500002", "availability": "Unavailable" },
  { "name": "Pooja Patel", "licenseNo": "LIC10004", "contact": "9876500003", "availability": "Available" },
  { "name": "Sonal Mishra", "licenseNo": "LIC10005", "contact": "9876500004", "availability": "Unavailable" },
  { "name": "Neha Singh", "licenseNo": "LIC10006", "contact": "9876500005", "availability": "Available" },
  { "name": "Anil Sharma", "licenseNo": "LIC10007", "contact": "9876500006", "availability": "Unavailable" },
  { "name": "Sameer Malhotra", "licenseNo": "LIC10008", "contact": "9876500007", "availability": "Available" },
  { "name": "Priya Saxena", "licenseNo": "LIC10009", "contact": "9876500008", "availability": "Unavailable" },
  { "name": "Kavita Mehta", "licenseNo": "LIC10010", "contact": "9876500009", "availability": "Available" },
  { "name": "Pooja Iyer", "licenseNo": "LIC10011", "contact": "9876500010", "availability": "Unavailable" },
  { "name": "Latha Verma", "licenseNo": "LIC10012", "contact": "9876500011", "availability": "Available" },
  { "name": "Divya Saxena", "licenseNo": "LIC10013", "contact": "9876500012", "availability": "Available" },
  { "name": "Pooja Desai", "licenseNo": "LIC10014", "contact": "9876500013", "availability": "Available" },
  { "name": "Rajesh Das", "licenseNo": "LIC10015", "contact": "9876500014", "availability": "Unavailable" },
  { "name": "Latha Iyer", "licenseNo": "LIC10016", "contact": "9876500015", "availability": "Unavailable" },
  { "name": "Sneha Nair", "licenseNo": "LIC10017", "contact": "9876500016", "availability": "Unavailable" },
  { "name": "Rajesh Reddy", "licenseNo": "LIC10018", "contact": "9876500017", "availability": "Available" },
  { "name": "Priya Chaudhary", "licenseNo": "LIC10019", "contact": "9876500018", "availability": "Available" },
  { "name": "Anil Saxena", "licenseNo": "LIC10020", "contact": "9876500019", "availability": "Available" },
  { "name": "Arjun Desai", "licenseNo": "LIC10021", "contact": "9876500020", "availability": "Unavailable" },
  { "name": "Suresh Dutta", "licenseNo": "LIC10022", "contact": "9876500021", "availability": "Unavailable" },
  { "name": "Kavita Chatterjee", "licenseNo": "LIC10023", "contact": "9876500022", "availability": "Unavailable" },
  { "name": "Manish Saxena", "licenseNo": "LIC10024", "contact": "9876500023", "availability": "Available" },
  { "name": "Manish Das", "licenseNo": "LIC10025", "contact": "9876500024", "availability": "Available" },
  { "name": "Suresh Sharma", "licenseNo": "LIC10026", "contact": "9876500025", "availability": "Unavailable" },
  { "name": "Deepa Nair", "licenseNo": "LIC10027", "contact": "9876500026", "availability": "Unavailable" },
  { "name": "Manish Chatterjee", "licenseNo": "LIC10028", "contact": "9876500027", "availability": "Unavailable" },
  { "name": "Vijay Reddy", "licenseNo": "LIC10029", "contact": "9876500028", "availability": "Available" },
  { "name": "Rahul Malhotra", "licenseNo": "LIC10030", "contact": "9876500029", "availability": "Unavailable" },
  { "name": "Divya Mehta", "licenseNo": "LIC10031", "contact": "9876500030", "availability": "Available" },
  { "name": "Amit Reddy", "licenseNo": "LIC10032", "contact": "9876500031", "availability": "Available" },
  { "name": "Priya Joshi", "licenseNo": "LIC10033", "contact": "9876500032", "availability": "Unavailable" },
  { "name": "Sameer Mishra", "licenseNo": "LIC10034", "contact": "9876500033", "availability": "Unavailable" },
  { "name": "Anita Verma", "licenseNo": "LIC10035", "contact": "9876500034", "availability": "Available" },
  { "name": "Neha Gupta", "licenseNo": "LIC10036", "contact": "9876500035", "availability": "Available" },
  { "name": "Deepa Gupta", "licenseNo": "LIC10037", "contact": "9876500036", "availability": "Unavailable" },
  { "name": "Pooja Desai", "licenseNo": "LIC10038", "contact": "9876500037", "availability": "Unavailable" },
  { "name": "Arjun Das", "licenseNo": "LIC10039", "contact": "9876500038", "availability": "Available" },
  { "name": "Suresh Saxena", "licenseNo": "LIC10040", "contact": "9876500039", "availability": "Unavailable" },
  { "name": "Rohit Chaudhary", "licenseNo": "LIC10041", "contact": "9876500040", "availability": "Available" },
  { "name": "Rahul Kumar", "licenseNo": "LIC10042", "contact": "9876500041", "availability": "Available" },
  { "name": "Pooja Patel", "licenseNo": "LIC10043", "contact": "9876500042", "availability": "Unavailable" },
  { "name": "Priya Mishra", "licenseNo": "LIC10044", "contact": "9876500043", "availability": "Unavailable" },
  { "name": "Neha Nair", "licenseNo": "LIC10045", "contact": "9876500044", "availability": "Unavailable" },
  { "name": "Amit Saxena", "licenseNo": "LIC10046", "contact": "9876500045", "availability": "Available" },
  { "name": "Sneha Gupta", "licenseNo": "LIC10047", "contact": "9876500046", "availability": "Unavailable" },
  { "name": "Amit Reddy", "licenseNo": "LIC10048", "contact": "9876500047", "availability": "Available" },
  { "name": "Rohit Malhotra", "licenseNo": "LIC10049", "contact": "9876500048", "availability": "Available" },
  { "name": "Manish Mehta", "licenseNo": "LIC10050", "contact": "9876500049", "availability": "Unavailable" },
  { "name": "Sameer Nair", "licenseNo": "LIC10051", "contact": "9876500050", "availability": "Available" },
  { "name": "Sonal Nair", "licenseNo": "LIC10052", "contact": "9876500051", "availability": "Unavailable" },
  { "name": "Sneha Nair", "licenseNo": "LIC10053", "contact": "9876500052", "availability": "Available" },
  { "name": "Anil Chaudhary", "licenseNo": "LIC10054", "contact": "9876500053", "availability": "Available" },
  { "name": "Sonal Desai", "licenseNo": "LIC10055", "contact": "9876500054", "availability": "Unavailable" },
  { "name": "Arjun Kumar", "licenseNo": "LIC10056", "contact": "9876500055", "availability": "Available" },
  { "name": "Manish Saxena", "licenseNo": "LIC10057", "contact": "9876500056", "availability": "Available" },
  { "name": "Deepa Mehta", "licenseNo": "LIC10058", "contact": "9876500057", "availability": "Unavailable" },
  { "name": "Divya Reddy", "licenseNo": "LIC10059", "contact": "9876500058", "availability": "Unavailable" },
  { "name": "Arjun Singh", "licenseNo": "LIC10060", "contact": "9876500059", "availability": "Unavailable" },
  { "name": "Amit Reddy", "licenseNo": "LIC10061", "contact": "9876500060", "availability": "Unavailable" },
  { "name": "Vijay Singh", "licenseNo": "LIC10062", "contact": "9876500061", "availability": "Available" },
  { "name": "Sneha Saxena", "licenseNo": "LIC10063", "contact": "9876500062", "availability": "Available" },
  { "name": "Sameer Sharma", "licenseNo": "LIC10064", "contact": "9876500063", "availability": "Unavailable" },
  { "name": "Arjun Desai", "licenseNo": "LIC10065", "contact": "9876500064", "availability": "Available" },
  { "name": "Sonal Chaudhary", "licenseNo": "LIC10066", "contact": "9876500065", "availability": "Available" },
  { "name": "Sameer Verma", "licenseNo": "LIC10067", "contact": "9876500066", "availability": "Unavailable" },
  { "name": "Sneha Chatterjee", "licenseNo": "LIC10068", "contact": "9876500067", "availability": "Available" },
  { "name": "Sneha Verma", "licenseNo": "LIC10069", "contact": "9876500068", "availability": "Available" },
  { "name": "Suresh Mishra", "licenseNo": "LIC10070", "contact": "9876500069", "availability": "Available" },
  { "name": "Pooja Nair", "licenseNo": "LIC10071", "contact": "9876500070", "availability": "Available" },
  { "name": "Vijay Das", "licenseNo": "LIC10072", "contact": "9876500071", "availability": "Available" },
  { "name": "Suresh Mehta", "licenseNo": "LIC10073", "contact": "9876500072", "availability": "Unavailable" },
  { "name": "Rahul Reddy", "licenseNo": "LIC10074", "contact": "9876500073", "availability": "Unavailable" },
  { "name": "Rahul Iyer", "licenseNo": "LIC10075", "contact": "9876500074", "availability": "Available" },
  { "name": "Anil Chaudhary", "licenseNo": "LIC10076", "contact": "9876500075", "availability": "Available" },
  { "name": "Sonal Chatterjee", "licenseNo": "LIC10077", "contact": "9876500076", "availability": "Unavailable" },
  { "name": "Suresh Malhotra", "licenseNo": "LIC10078", "contact": "9876500077", "availability": "Available" },
  { "name": "Manish Chaudhary", "licenseNo": "LIC10079", "contact": "9876500078", "availability": "Unavailable" },
  { "name": "Manish Dutta", "licenseNo": "LIC10080", "contact": "9876500079", "availability": "Unavailable" },
  { "name": "Kavita Singh", "licenseNo": "LIC10081", "contact": "9876500080", "availability": "Unavailable" },
  { "name": "Sameer Dutta", "licenseNo": "LIC10082", "contact": "9876500081", "availability": "Unavailable" },
  { "name": "Sonal Iyer", "licenseNo": "LIC10083", "contact": "9876500082", "availability": "Available" },
  { "name": "Arjun Saxena", "licenseNo": "LIC10084", "contact": "9876500083", "availability": "Available" },
  { "name": "Vijay Dutta", "licenseNo": "LIC10085", "contact": "9876500084", "availability": "Available" },
  { "name": "Rajesh Dutta", "licenseNo": "LIC10086", "contact": "9876500085", "availability": "Unavailable" },
  { "name": "Anita Chatterjee", "licenseNo": "LIC10087", "contact": "9876500086", "availability": "Available" },
  { "name": "Deepa Das", "licenseNo": "LIC10088", "contact": "9876500087", "availability": "Unavailable" },
  { "name": "Rajesh Bose", "licenseNo": "LIC10089", "contact": "9876500088", "availability": "Available" },
  { "name": "Manish Malhotra", "licenseNo": "LIC10090", "contact": "9876500089", "availability": "Unavailable" },
  { "name": "Vijay Singh", "licenseNo": "LIC10091", "contact": "9876500090", "availability": "Unavailable" },
  { "name": "Divya Saxena", "licenseNo": "LIC10092", "contact": "9876500091", "availability": "Unavailable" },
  { "name": "Deepa Verma", "licenseNo": "LIC10093", "contact": "9876500092", "availability": "Available" },
  { "name": "Rohit Bose", "licenseNo": "LIC10094", "contact": "9876500093", "availability": "Available" },
  { "name": "Kavita Saxena", "licenseNo": "LIC10095", "contact": "9876500094", "availability": "Unavailable" },
  { "name": "Rohit Chaudhary", "licenseNo": "LIC10096", "contact": "9876500095", "availability": "Available" },
  { "name": "Priya Patel", "licenseNo": "LIC10097", "contact": "9876500096", "availability": "Available" },
  { "name": "Sonal Bose", "licenseNo": "LIC10098", "contact": "9876500097", "availability": "Unavailable" },
  { "name": "Latha Iyer", "licenseNo": "LIC10099", "contact": "9876500098", "availability": "Unavailable" },
  { "name": "Pooja Das", "licenseNo": "LIC10100", "contact": "9876500099", "availability": "Available" }  
];

const seedDrivers = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Driver.deleteMany(); // clear existing drivers
    await Driver.insertMany(mockDrivers);
    console.log("Drivers seeded successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding drivers:", error);
    mongoose.connection.close();
  }
};

seedDrivers();
