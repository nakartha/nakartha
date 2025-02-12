// import prisma from ".";

// async function main() {
//   // Create Users
//   const user1 = await prisma.user.create({
//     data: {
//       name: "Alice",
//       email: "alice@example.com",
//       password: "password123",
//     },
//   });

//   const user2 = await prisma.user.create({
//     data: {
//       name: "Bob",
//       email: "bob@example.com",
//       password: "password456",
//     },
//   });

//   // Create Group
//   const group = await prisma.group.create({
//     data: {
//       Group_Name: "Trip to Goa",
//       Group_Type: "Trip",
//       Group_Members: {
//         create: [
//           { user: { connect: { pk_User_UserID: user1.pk_User_UserID } } },
//           { user: { connect: { pk_User_UserID: user2.pk_User_UserID } } },
//         ],
//       },
//     },
//   });

//   // Create Transaction
//   const transaction = await prisma.transaction.create({
//     data: {
//       Transaction_Description: "Hotel Booking",
//       Transaction_Amount: 2000,
//       fk_Transaction_PayerId: user1.pk_User_UserID,
//       fk_Transaction_GroupId: group.pk_Group_GroupID,
//       Transaction_Splits: {
//         create: [
//           {
//             user: { connect: { pk_User_UserID: user1.pk_User_UserID } },
//             TransactionSplit_Amount: 1000,
//           },
//           {
//             user: { connect: { pk_User_UserID: user2.pk_User_UserID } },
//             TransactionSplit_Amount: 1000,
//           },
//         ],
//       },
//     },
//   });

//   console.log("Dummy data inserted successfully.");
// }

// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
