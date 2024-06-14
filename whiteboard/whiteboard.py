#Under attack!
#Your kingdom is under attack from evil invaders. You must summon your guards to help defend your fortress. 

#In this problem you will be given two arrays (attackers & defenders). Each array will be made of a series 
#of integers. At each index location if the value in the attackers array is greater than the value in the defenders
#array the attacker will overpower the defender. If the value in the defender array is greater, than the defender
#will be able to hold off the attack. If the values are equal a truce is made and the attacker will forfeit.

#If the number of attackers who were able to overpower is greater than defenders who held off the attack, the fortress will be overtaken.
#If the number of defenders who were able to hold off is greater than the attackers who overpowered, the fortress survives the attack!
#Return True if the fortress survives the attack and False if the attackers overpower. You can always assume both arrays will be of equal
#length.

#Example 1
#Input: attackers = [5,3,8,10,1], defenders = [2,7,3,9,5]
#Output: False
#Explanation: the values at index 0,2,3 in attackers array were greater than the defenders array. 
# 3 attackers is greater than 2 defenders so the fortress gets overtaken and returns False

#Example 2
#Input: attackers = [2, 2, 5], defenders = [8, 9, 1]
#Output: True
#Explanation: both 8 and 9 in the defenders array are greater than 2. 2 defenders win, only 1 attacker wins.


#Example 3
#Input: attackers = [0, 0, 0], defenders = [0, 0, 0]
#Output: True
#Explanation: all values in both arrays are equal and a truce has been made, the fortress lives another day. 

def attack(attackers, defenders):
    attackers_ct = 0
    defenders_ct = 0
    
    for i in range(len(attackers)):
        attacker = attackers[i]
        defender = defenders[i]
        
        if attacker > defender:
            attackers_ct += 1
        elif defender > attacker:
            defenders_ct += 1
    
    return defenders_ct >= attackers_ct

# Another solution 
# def attack(attack, defend):
#     true = 0
#     false = 0
#     for i in range(len(attack)):
#         if attack[i] <= defend[i]:
#             true += 1
#         else:
#             false += 1
#     if true >= false:
#         return True
#     else:
#         return False
    
# print(attack([0, 0, 0],[0, 0, 0]))