import requests
import sys

url = 'https://europe-west1-asoc-interview.cloudfunctions.net/get-network-events/'
login = ''
pwd = ''
starts_at = sys.argv[1] if len(sys.argv) > 1 else 0

def count_unique_events(res_data):
    unique_events = set()
    for event in res_data:
        if(event is not ''):
            e = event.split(' ')[1::]
            time_seconds = e[0].split(':')[-1][:2]
            unique_events.add((time_seconds, e[1], e[2], e[3]))
    return len(unique_events)

try:
    res = requests.get(url, params={'start': starts_at}, auth=(login, pwd))
except requests.exceptions.RequestException as err:
    print(err)


print(count_unique_events(res.text.split('\n')))


# mocked_data = None
# with open('mock.txt', 'r') as file:
#     mocked_data = file.read()

# data = mocked_data.split('\n')

# print(count_unique_events(data))
