abstract class BankAccount {
int accNumber;
String accHolderName;
double balance;

BankAccount(int accNumber, String accHolderName, double balance){
	this.accNumber=accNumber;
	this.accHolderName=accHolderName;
	this.balance=balance;
}

void deposit(double amount) {
	balance=balance+amount;
	System.out.println("Amount Deposited:"+amount);
}
void displayDetails() {
	System.out.println("Account Number:"+accNumber);
	System.out.println("Account Holder Name:"+accHolderName);
	System.out.println("Balance:"+balance);
}
abstract void calculateInterest();
}
class SavingsAccount extends BankAccount{
	SavingsAccount(int accNumber,String accHolderName,double balance){
		super(accNumber,accHolderName,balance);
	}
	void calculateInterest() {
		double interest=balance*0.05;
		System.out.println("Savings Account interest:"+interest);
	}
}
class CurrentAccount extends BankAccount{
	CurrentAccount(int accNumber, String accHolderName,double balance){
		super(accNumber,accHolderName,balance);
	}
	void calculateInterest() {
		double interest=balance*0.02;
		System.out.println("Current Account Interest:"+interest);
	}
}
public class Exp10{
	public static void main(String[]args) {
		SavingsAccount sa=new SavingsAccount(101,"Ankit Jukaria",10000);
		CurrentAccount ca=new CurrentAccount(102,"Amol",20000);
		System.out.println("----Savings Account----");;
		sa.deposit(2000);
		sa.displayDetails();
		sa.calculateInterest();
		System.out.println();
		System.out.println("----Current Account----");
		ca.deposit(3000);
		ca.displayDetails();
		ca.calculateInterest();
	}
}
