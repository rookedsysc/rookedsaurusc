#! python3
# -*- coding: utf-8 -*-

import os


if __name__ == "__main__":
    str = input("Commit 메시지를 입력하세요 : \r\n")
    os.system("sudo docker run -it --env-file=.env -e \"CONFIG=$(cat ./config.json | jq -r tostring)\" algolia/docsearch-scraper")
    os.system("yarn build")
    os.system("git add .")
    # 입력받은 str로 commit message를 작성
    os.system("git commit -m \"{}".format(str) + "\"")
    os.system("git push")
