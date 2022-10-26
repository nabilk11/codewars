#  https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/python - 8 kyu

# first method uses a conditional that basically asks if arr exists -> can be replaced with if not arr:
def count_positives_sum_negatives(arr):
    if arr == None or len(arr) == 0:
        return []
    output = []
    posCnt = 0
    negSum = 0
    for i in range(len(arr)):
        if arr[i] > 0:
            posCnt = posCnt + 1
        if arr[i] < 0:
            negSum = negSum + arr[i]
    output.append(posCnt)
    output.append(negSum)

    return output


def count_positives_sum_negatives2(arr):
    if not arr:
        return []
    pos_cnt = 0
    neg_sum = 0
    for x in arr:
        if x > 0:
            pos_cnt += 1
        if x < 0:
            neg_sum += x
    return [pos_cnt, neg_sum]
