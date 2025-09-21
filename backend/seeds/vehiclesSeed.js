import mongoose from "mongoose";
import dotenv from "dotenv";
import Vehicle from "../models/Vehicle.js";

dotenv.config();

const mockVehicles = [
  { "name": "JBM", "vehicleNo": "GJ 14 rj 1000", "capacity": 35, "status": "Unavailable" },
  { "name": "Tata", "vehicleNo": "KA 10 rj 1001", "capacity": 45, "status": "Available" },
  { "name": "Mahindra", "vehicleNo": "WB 12 dl 1002", "capacity": 25, "status": "Available" },
  { "name": "Tata", "vehicleNo": "RJ 01 mh 1003", "capacity": 35, "status": "Unavailable" },
  { "name": "Mahindra", "vehicleNo": "KA 18 wb 1004", "capacity": 50, "status": "Unavailable" },
  { "name": "Eicher", "vehicleNo": "DL 21 rj 1005", "capacity": 35, "status": "Unavailable" },
  { "name": "SML Isuzu", "vehicleNo": "RJ 01 wb 1006", "capacity": 50, "status": "Available" },
  { "name": "TVS", "vehicleNo": "TN 21 ap 1007", "capacity": 40, "status": "Unavailable" },
  { "name": "SML Isuzu", "vehicleNo": "UP 07 aa 1008", "capacity": 30, "status": "Unavailable" },
  { "name": "Ashok Leyland", "vehicleNo": "TN 01 ab 1009", "capacity": 50, "status": "Unavailable" },
  { "name": "Force Motors", "vehicleNo": "RJ 18 tn 1010", "capacity": 25, "status": "Available" },
  { "name": "Force Motors", "vehicleNo": "GJ 10 tn 1011", "capacity": 35, "status": "Unavailable" },
  { "name": "SML Isuzu", "vehicleNo": "UP 12 wb 1012", "capacity": 25, "status": "Available" },
  { "name": "Eicher", "vehicleNo": "AP 10 dl 1013", "capacity": 30, "status": "Unavailable" },
  { "name": "Piaggio", "vehicleNo": "GJ 09 kl 1014", "capacity": 25, "status": "Available" },
  { "name": "Tata", "vehicleNo": "UP 10 wb 1015", "capacity": 30, "status": "Available" },
  { "name": "SML Isuzu", "vehicleNo": "TN 14 ab 1016", "capacity": 25, "status": "Unavailable" },
  { "name": "TVS", "vehicleNo": "WB 18 dl 1017", "capacity": 25, "status": "Unavailable" },
  { "name": "JBM", "vehicleNo": "AP 14 ap 1018", "capacity": 20, "status": "Unavailable" },
  { "name": "Ashok Leyland", "vehicleNo": "UP 33 kl 1019", "capacity": 30, "status": "Available" },
  { "name": "JBM", "vehicleNo": "TN 10 wb 1020", "capacity": 50, "status": "Unavailable" },
  { "name": "JBM", "vehicleNo": "RJ 14 ab 1021", "capacity": 20, "status": "Available" },
  { "name": "TVS", "vehicleNo": "KA 12 rj 1022", "capacity": 20, "status": "Unavailable" },
  { "name": "Ashok Leyland", "vehicleNo": "DL 09 up 1023", "capacity": 40, "status": "Available" },
  { "name": "Mahindra", "vehicleNo": "MH 33 up 1024", "capacity": 25, "status": "Available" },
  { "name": "JBM", "vehicleNo": "UP 18 ap 1025", "capacity": 40, "status": "Unavailable" },
  { "name": "Eicher", "vehicleNo": "UP 10 aa 1026", "capacity": 40, "status": "Unavailable" },
  { "name": "SML Isuzu", "vehicleNo": "AP 10 ab 1027", "capacity": 50, "status": "Unavailable" },
  { "name": "BharatBenz", "vehicleNo": "MH 12 kl 1028", "capacity": 30, "status": "Available" },
  { "name": "Mahindra", "vehicleNo": "TN 12 wb 1029", "capacity": 25, "status": "Unavailable" },
  { "name": "Eicher", "vehicleNo": "UP 18 kl 1030", "capacity": 35, "status": "Available" },
  { "name": "Tata", "vehicleNo": "DL 09 kl 1031", "capacity": 50, "status": "Unavailable" },
  { "name": "Force Motors", "vehicleNo": "KA 01 aa 1032", "capacity": 40, "status": "Available" },
  { "name": "TVS", "vehicleNo": "AP 09 aa 1033", "capacity": 25, "status": "Available" },
  { "name": "Piaggio", "vehicleNo": "RJ 18 aa 1034", "capacity": 35, "status": "Unavailable" },
  { "name": "Piaggio", "vehicleNo": "RJ 01 up 1035", "capacity": 25, "status": "Available" },
  { "name": "BharatBenz", "vehicleNo": "TN 10 tn 1036", "capacity": 40, "status": "Available" },
  { "name": "TVS", "vehicleNo": "DL 21 kl 1037", "capacity": 40, "status": "Available" },
  { "name": "Eicher", "vehicleNo": "DL 09 ab 1038", "capacity": 25, "status": "Unavailable" },
  { "name": "Tata", "vehicleNo": "UP 14 dl 1039", "capacity": 45, "status": "Unavailable" },
  { "name": "Ashok Leyland", "vehicleNo": "WB 09 rj 1040", "capacity": 30, "status": "Unavailable" },
  { "name": "Tata", "vehicleNo": "WB 07 rj 1041", "capacity": 50, "status": "Unavailable" },
  { "name": "Eicher", "vehicleNo": "KA 09 rj 1042", "capacity": 40, "status": "Unavailable" },
  { "name": "Piaggio", "vehicleNo": "UP 12 kl 1043", "capacity": 20, "status": "Available" },
  { "name": "Force Motors", "vehicleNo": "WB 12 tn 1044", "capacity": 25, "status": "Available" },
  { "name": "Piaggio", "vehicleNo": "GJ 06 up 1045", "capacity": 50, "status": "Available" },
  { "name": "BharatBenz", "vehicleNo": "HR 12 rj 1046", "capacity": 25, "status": "Unavailable" },
  { "name": "Mahindra", "vehicleNo": "WB 33 rj 1047", "capacity": 25, "status": "Available" },
  { "name": "BharatBenz", "vehicleNo": "HR 18 dl 1048", "capacity": 30, "status": "Unavailable" },
  { "name": "Mahindra", "vehicleNo": "HR 09 ap 1049", "capacity": 50, "status": "Unavailable" },
  { "name": "JBM", "vehicleNo": "GJ 18 dl 1050", "capacity": 45, "status": "Available" },
  { "name": "Tata", "vehicleNo": "KA 14 tn 1051", "capacity": 50, "status": "Unavailable" },
  { "name": "BharatBenz", "vehicleNo": "GJ 33 mh 1052", "capacity": 35, "status": "Available" },
  { "name": "SML Isuzu", "vehicleNo": "HR 21 tn 1053", "capacity": 20, "status": "Available" },
  { "name": "Ashok Leyland", "vehicleNo": "WB 14 kl 1054", "capacity": 30, "status": "Available" },
  { "name": "Tata", "vehicleNo": "MH 01 kl 1055", "capacity": 30, "status": "Available" },
  { "name": "Mahindra", "vehicleNo": "UP 06 wb 1056", "capacity": 50, "status": "Unavailable" },
  { "name": "TVS", "vehicleNo": "MH 18 dl 1057", "capacity": 45, "status": "Available" },
  { "name": "Force Motors", "vehicleNo": "UP 12 up 1058", "capacity": 45, "status": "Available" },
  { "name": "Force Motors", "vehicleNo": "KA 21 tn 1059", "capacity": 50, "status": "Available" },
  { "name": "BharatBenz", "vehicleNo": "UP 06 mh 1060", "capacity": 30, "status": "Unavailable" },
  { "name": "SML Isuzu", "vehicleNo": "WB 33 tn 1061", "capacity": 40, "status": "Unavailable" },
  { "name": "SML Isuzu", "vehicleNo": "RJ 01 ab 1062", "capacity": 40, "status": "Available" },
  { "name": "Force Motors", "vehicleNo": "DL 09 up 1063", "capacity": 35, "status": "Unavailable" },
  { "name": "Mahindra", "vehicleNo": "MH 33 rj 1064", "capacity": 50, "status": "Available" },
  { "name": "JBM", "vehicleNo": "DL 14 dl 1065", "capacity": 45, "status": "Available" },
  { "name": "Mahindra", "vehicleNo": "GJ 10 wb 1066", "capacity": 40, "status": "Available" },
  { "name": "Eicher", "vehicleNo": "AP 14 dl 1067", "capacity": 45, "status": "Unavailable" },
  { "name": "SML Isuzu", "vehicleNo": "UP 33 ap 1068", "capacity": 40, "status": "Available" },
  { "name": "TVS", "vehicleNo": "WB 01 wb 1069", "capacity": 50, "status": "Available" },
  { "name": "Tata", "vehicleNo": "UP 14 rj 1070", "capacity": 45, "status": "Available" },
  { "name": "TVS", "vehicleNo": "KA 21 rj 1071", "capacity": 45, "status": "Available" },
  { "name": "Tata", "vehicleNo": "DL 06 wb 1072", "capacity": 50, "status": "Unavailable" },
  { "name": "Eicher", "vehicleNo": "MH 01 wb 1073", "capacity": 40, "status": "Unavailable" },
  { "name": "SML Isuzu", "vehicleNo": "RJ 18 ap 1074", "capacity": 25, "status": "Unavailable" },
  { "name": "Tata", "vehicleNo": "MH 01 up 1075", "capacity": 45, "status": "Available" },
  { "name": "TVS", "vehicleNo": "HR 33 rj 1076", "capacity": 40, "status": "Unavailable" },
  { "name": "BharatBenz", "vehicleNo": "UP 06 tn 1077", "capacity": 40, "status": "Unavailable" },
  { "name": "BharatBenz", "vehicleNo": "KA 18 ap 1078", "capacity": 50, "status": "Available" },
  { "name": "JBM", "vehicleNo": "DL 21 dl 1079", "capacity": 25, "status": "Available" },
  { "name": "Force Motors", "vehicleNo": "GJ 12 aa 1080", "capacity": 35, "status": "Available" },
  { "name": "Eicher", "vehicleNo": "MH 07 mh 1081", "capacity": 20, "status": "Unavailable" },
  { "name": "Force Motors", "vehicleNo": "UP 10 dl 1082", "capacity": 50, "status": "Unavailable" },
  { "name": "JBM", "vehicleNo": "RJ 12 mh 1083", "capacity": 30, "status": "Available" },
  { "name": "BharatBenz", "vehicleNo": "RJ 06 aa 1084", "capacity": 20, "status": "Unavailable" },
  { "name": "Tata", "vehicleNo": "TN 12 ap 1085", "capacity": 30, "status": "Available" },
  { "name": "SML Isuzu", "vehicleNo": "HR 18 ap 1086", "capacity": 50, "status": "Unavailable" },
  { "name": "JBM", "vehicleNo": "TN 06 rj 1087", "capacity": 20, "status": "Available" },
  { "name": "Force Motors", "vehicleNo": "WB 01 aa 1088", "capacity": 50, "status": "Available" },
  { "name": "SML Isuzu", "vehicleNo": "WB 07 aa 1089", "capacity": 45, "status": "Unavailable" },
  { "name": "TVS", "vehicleNo": "TN 33 ab 1090", "capacity": 20, "status": "Available" },
  { "name": "Tata", "vehicleNo": "DL 10 tn 1091", "capacity": 30, "status": "Unavailable" },
  { "name": "TVS", "vehicleNo": "DL 18 tn 1092", "capacity": 30, "status": "Unavailable" },
  { "name": "Force Motors", "vehicleNo": "MH 07 aa 1093", "capacity": 50, "status": "Unavailable" },
  { "name": "TVS", "vehicleNo": "GJ 09 tn 1094", "capacity": 25, "status": "Available" },
  { "name": "BharatBenz", "vehicleNo": "AP 06 mh 1095", "capacity": 45, "status": "Available" },
  { "name": "TVS", "vehicleNo": "HR 33 up 1096", "capacity": 50, "status": "Unavailable" },
  { "name": "Ashok Leyland", "vehicleNo": "RJ 10 mh 1097", "capacity": 45, "status": "Unavailable" },
  { "name": "JBM", "vehicleNo": "UP 12 ab 1098", "capacity": 25, "status": "Available" },
  { "name": "BharatBenz", "vehicleNo": "WB 09 up 1099", "capacity": 30, "status": "Available" }
];

const seedVehicles = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Vehicle.deleteMany(); // clear existing drivers
    await Vehicle.insertMany(mockVehicles);
    console.log("Vehicles seeded successfully!");
    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding Vehicles:", error);
    mongoose.connection.close();
  }
};

seedVehicles();
