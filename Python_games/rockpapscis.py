import random

def classic():

    choices = ["rock", "paper", "scissors"]
    
    while True:
        user_choice = input("Enter rock, paper, or scissors: ").strip().lower()
        
        if user_choice not in choices:
            print("Please pick rock, paper or scissors :)")
            continue
        
        computer_choice = random.choice(choices)
        print(f"Computer chose: {computer_choice}")
        
        if user_choice == computer_choice:
            print("Its a tie")
        elif (
            (user_choice == "rock" and computer_choice == "scissors") or
            (user_choice == "paper" and computer_choice == "rock") or
            (user_choice == "scissors" and computer_choice == "paper")
        ):
            print("You won :O | Maybe computers arent so advanced")
        else:
            print("You lost :( | Computers are taking over !!!")
        
        play_again = input("Do you want to play again? (yes/no): ").strip().lower()
        if play_again != "yes":
            print("Bye bye")
            break

classic()

""" import random

def rocks():
    
    rocks = random.randint(15, 30)
    print(f"Game starts with {rocks} rocks")

    while rocks > 0:

        try:
            user_choice = int(input(f"There are {rocks} rocks left. How many will you take (1-3)? "))
            if user_choice < 1 or user_choice > 3:
                print("You can only take 1, 2, or 3 rocks.")
                continue
            if user_choice > rocks:
                print(f"There arent that many rocks left. Choose a number between 1 and {rocks}.")
                continue
        except ValueError:
            print("Please enter a number between 1 and 3.")
            continue
        
        rocks -= user_choice
        if rocks == 0:
            print("You lose")
            break

        computer_choice = min(random.randint(1, 3), rocks)
        print(f"The computer takes {computer_choice} rocks.")
        rocks -= computer_choice

        if rocks == 0:
            print("You win")
            break


rocks() """