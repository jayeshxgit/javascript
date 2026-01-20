
function calculateTotalSpentByCategory(transactions) {
   const total = {};
   for(let i=0; i<transactions.length;i++){
    const transaction = transactions[i];
    const category = transaction.category;
    const price = transaction.price;

    if(total[category]){
      total[category] += price;
    }
    else{
      total[category] = price;
    }
   }
   const totalspent = [];
   for(let items in total){
       totalspent.push({
      category: category,
      totalSpent: total[category]
    });
   }
   return totalspent;
  }
  
  module.exports = calculateTotalSpentByCategory;