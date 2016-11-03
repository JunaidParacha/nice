
function Money(name){
	var walletBalance = 0;
	var checkingBalance = 0;
	var savingBalance = 0;
	

	this.name = name;
	this.add = function(dollars, cents, type){
		this.money = dollars + cents/100
		if(name == 'wallet'){
			if(type == 'deposit'){
				walletBalance = walletBalance + this.money;
			}
			else walletBalance = walletBalance - this.money;
			return walletBalance;
		}
		else if (name == "checking"){
			if(type == 'deposit'){
				checkingBalance = checkingBalance + this.money;
			}
			else checkingBalance = checkingBalance - this.money;
			return checkingBalance;
		}
		else if (name == "saving"){
			if(type == 'deposit'){
				savingBalance = savingBalance + this.money;
			}
			else savingBalance = savingBalance - this.money;
			return savingBalance;
		}

	}

}

var wallet = new Money('wallet');
var saving = new Money('saving');
var checking = new Money('checking');
console.log(wallet.name)
console.log(wallet.add(10, 10, 'deposit'));
console.log(wallet.add(10, 10, 'deposit'));
console.log(wallet.add(10, 10, 'deposit'));
console.log(wallet.add(10, 10, 'deposit'));
console.log(wallet.add(10, 10, 'deposit'));
console.log(saving.name)
console.log(saving.add(100, 15, 'deposit'));
console.log(saving.add(10, 15, 'withdraw'));
console.log(checking.name)
console.log(checking.add(1000, 15, 'deposit'));
console.log(checking.add(1000, 15, 'deposit'));
console.log(checking.add(1000, 15, 'deposit'));
console.log(checking.add(1000, 15, 'deposit'));





// console.log(whatever.getwalletBalance());