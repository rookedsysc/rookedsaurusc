#! /usr/bin/python3
# -*- coding: utf-8 -*-

import os

def clearAfterPause() :
    if(os.name == 'nt') :
        os.system("pause")
        os.system("cls")
    else :
        os.system("read -p 'Press Enter to continue...' var")
        os.system("clear")

def deplouyWithCommit(option) :
    os.system("sudo docker run --platform amd64 -it --env-file=.env -e \"CONFIG=$(cat ./config.json | jq -r tostring)\" algolia/docsearch-scraper")

    if(option == "2") :
        str = input("Commit 메시지를 입력하세요 : \r\n")
        os.system("yarn build")
        os.system("git add .")
        # 입력받은 str로 commit message를 작성
        os.system("git commit -m \"{}".format(str) + "\"")
        os.system("git push")

def main() :
    while(1) :
        # algolia caching or chaching + commit 선택
        print("1: algolia caching")
        print("2: algolia caching + commit")
        print("q: deploy 종료")
        str = input("번호를 입력해주세요 : \r\n")
        if str == "1" or str == "2" :
            deplouyWithCommit(str)
            clearAfterPause()
        # q 입력하면 종료
        elif str == "q" :
            break
        else :
            print("잘못된 번호입니다.")
            clearAfterPause()

if __name__ == "__main__" :
    main()