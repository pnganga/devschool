=begin ANy variable that starts with a "$" symbol is a global variable.It can be accessed anywhere in the system.
=end
$interest_rate = 0.09

=begin Any variable whose value remains the same throughout is known as a constant.the name of this variable should be written in capital letters.
=end

# good:

INTEREST_RATE = 0.09

# Bad:

interest_rate = 0.09

=begin

# Bank characteristics
-they create accounts
-it has an operating balance
-it gives out loans
-they take deposits
-they are always guarded => comes from a third party
-has employees,a location, operating hours
-it has customers

=end

# class Names should be nouns
class Bank

=begin
The initialize method defines a constructor in Ruby.constructors perfom all the necessary setup to a class when it is instantiated using the '.new' method
=end

   def initialize(operating_balance,employees)
=begin 
Instance variables come into existence when a class is instantiated using the '.new' method.They are defined by starting a variable name with the symbol '@' symbol.
=end
       
       @operating_balance = operating_balance
       @employees = employees
      
   end
    # To create an account a customer provides: full names,id number, phone number, initial deposit
  
  
    ##=>Method name should be verbs 
    ##=>If a method has more than three arguments, pass the arguments as a hash
    def create_account(customer_details)
        puts "full names: #{customer_details[:full_names]}"
        puts "id number: #{customer_details[:id_number]}"
        puts "phone number: #{customer_details[:phone_number]}"
        puts "initial deposit: #{customer_details[:initial_deposit]}"
        
        
        
    end
end
=begin
We create a new instance of the class Bank and assign it to a variable 'bank'
=end
bank_operating_balance = 4500000.00
new_employees = ['george', 'mike', 'munene']

bank = Bank.new(
                bank_operating_balance,
                new_employees
               )


customer_details = {}

customer_details[:full_names] = 'Pius nganga'
customer_details[:id_number] = 27989631
customer_details[:phone_number] = 254724565786
customer_details[:initial_deposit] = 1000.00


bank.create_account(customer_details)



