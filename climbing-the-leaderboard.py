leaderboard = [100, 100, 50, 40, 40, 20, 10];
game = [5, 25, 50, 120];

def climbingLeaderboard (ranked, player):
    ranked = sorted(list(set(ranked)), reverse=True)
    player = sorted(player, reverse=True);

    res = []
    j = 0
    l = len(ranked);

    for i in range(len(player)):
        while j < l and player[i] < ranked[j]:
            j+=1
        
        res.append(j+1)
    print(res)
    return res[::-1]

climbingLeaderboard(leaderboard, game)


