# online-event-guideline
## TEAM Gongdory 
# <온라인 이벤트 가이드라인>
## 프로젝트 계획 이유
코로나19로 인해 그동안 오프라인으로 진행되었던 다양한 행사들이 온라인으로 전환되었다. 또한 온라인으로 진행하면 참가자들의 시공간 제약이 줄어 온라인이 주는 편리함과 효용성을 이용하기 위해 다양한 기업들이 온라인으로 진행하는 시도를 하고 있다. 이를 위해 많은 기업들은 짧은 시간내에 오프라인으로 진행했던 이벤트들을 온라인상으로 가져와 진행하기 위해 노력하고 있다. 하지만 이런 변화가 너무 갑작스러워 어떤 플랫폼을 어떻게 사용하여 온라인 상으로 행사를 진행을 해야 하는지 가이드라인이 제공되지 않아 많은 담당자들이 어려움을 겪고 있다. 특히, 평소에 전자기기를 잘 다루지 못하는 사람들을 이 어려움이 더 크게 다가와 더 큰 걱정을 안고 있다. 따라서 그러한 어려움을 해결하고자 상황별 온라인 행사 진행 가이드라인을 제공하여 쉽게 따라할 수 있는 웹사이트를 제작하게 되었다.

### 이벤트 종류 및 플랫폼 소개
#### 1. 친목도모형 이벤트
친목도모형 이벤트란 참여한 사람들로 하여금 다양한 활동들을 통해 서로에 대해 알아가고 친분을 쌓을 수 있는 시간을 제공해주는 것을 목적으로 하는 행사를 일컫는다. 주최자 혼자가 아닌 참석자들이 모두 다 함께 참여하고 즐길 수 있는 행사를 만드는 것이 중요한데, 이때 Zoom이라는 온라인 플랫폼을 이용하면 온라인에서도 잘 즐길 수 있다. 이 가이드라인에서는 ‘Zoom’을 활용하여 어떻게 친목도모형 온라인 행사를 준비하고 진행하는 방법을 알려줄 것이다.
 
#### 2. 설명회
설명회는 다수의 사람들에게 설명하거나 홍보하기 위해 활용된다. 이때 질의응답을 가져 참가자들의 궁금증도 해소하는 시간을 갖는 일이 많다. 온라인에서 잘 활용될 수 있는 플랫폼은 유튜브이다. 유튜브 라이브 스트리밍을 통해 카메라로만 진행되는 설명회 방법과 PPT와 같은 미디어들을 이용하여 설명회를 진행하는 방법을 알려줄 것이다,

#### 3. 참여형 이벤트
참여형 이벤트는 사람들에게 이벤트를 제공하여 이벤트 주최지에 관심을 불러 일으키는 것을 목적으로 하는 행사이다. 이때 특정 계층에게만 제공하여 진행하는 경우가 많은데 그 때 가장 잘 활용될 수 있는 플랫폼이 ‘구글미트’이다. 주최자의 목적에 따라 구글미트를 활용하여 이벤트를 진행하는 방법을 알려줄 것이다.

## 설치 및 배포 방법

### 설치
1. node.js 설치
2. Visual Studio Code용 Azure Web Apps 확장 설치

### 배포 방법
1. GitHub 리포지토리를 컴퓨터에 복제 
- <YOUR_GITHUB_ACCOUNT_NAME>은 GitHub 사용자 이름으로 변환
```bash
$ git clone https://github.com/<YOUR_GITHUB_ACCOUNT_NAME>/online-event-guideline
```

2. Visual Studio Code에서 복제한 리포지토리 폴더 열기

3. 보기 > 명령 팔레트 > Azure: Sign In

4. 명령 팔레트 > Azure: Select Subscriptions로 배포 시 사용할 구독(Azure 구독1)을 포함하도록 Azure 구독을 필터링
![image](https://user-images.githubusercontent.com/82620252/129473471-fc339a76-4972-418c-9772-86ac614bb5b2.png)

5. Azure 로고를 선택하여 Azure 확장 창 열기
6. STATIC WEB APPS 레이블에 + 기호 선택
![image](https://user-images.githubusercontent.com/88205708/129472630-3823dddc-4925-40df-9bc2-1bb50521dfc3.png)

5. 구독: Azure 구독1 선택 > 앱 이름 입력 > custom 선택 > ./ 입력 > 공란 입력
![image](https://user-images.githubusercontent.com/82620252/129473541-46e9ccfb-54da-4040-be64-77cfcf4cf58b.png)
![image](https://user-images.githubusercontent.com/88205708/129472663-069e60e9-0f20-4072-b7a1-b0998ccca6e3.png)
![image](https://user-images.githubusercontent.com/88205708/129472671-5f7ac141-3223-40f7-9c52-54aba7d2bf1d.png)
![image](https://user-images.githubusercontent.com/82620252/129473524-feae96d5-9c9d-463f-b85c-55bf186e788e.png)

6. GitHub 리포지토리 사이트에서 Actions 탭에서 Azure Static Web Apps CI/CD의 Build and Deploy Job 프로세스 확인<br>
![image](https://user-images.githubusercontent.com/82620252/129473683-7f61c90a-26ad-43fa-8cc0-c00a2b836701.png)

7. Build and Deploy 완료 후, Visual Studio Code에서 STATIC WEB APPS 아래 내 프로젝트 오른쪽 클릭 후 Browse Site 선택하여 배포 확인<br>
![image](https://user-images.githubusercontent.com/82620252/129473800-72f63562-faba-4d77-9235-c071dcbaceec.png)
