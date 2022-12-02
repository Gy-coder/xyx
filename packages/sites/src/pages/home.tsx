import { FC } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@g-ui/components";
import PageHeader from "../components/PageHeader";
import HomeWidget from "../components/HomeWidget";

const { Header, Content } = Layout;

const Home: FC = () => {
  return (
    <>
      <Layout>
        <Header className="min-h-[64px]">
          <PageHeader />
        </Header>
        <Content>
          <div className="flex justify-center items-center flex-col bg-gray-100 pt-32 pb-16">
            <div className="font-momo text-8xl font-bold">G-UI</div>
            <div className="text-base mt-6">
              一个基于React、TypeScript的好用的UI组件库
            </div>
            <Link to="/docs/button">
              <button className="mt-8 bg-green-600 p-4 rounded text-white">
                开始使用
              </button>
            </Link>
          </div>
          <div className="flex flex-row items-center justify-around">
            <HomeWidget
              imgSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQsAAAC9CAMAAACTb6i8AAAAWlBMVEX///9h2vtU2PtT2Pv3/f/7/v/1/f+x6/1p3PuQ5Pxi2vvv+/9v3fvB7/2A4PzY9f7g9/7o+f6o6f2T5PzT9P687v3I8f163/ye5/y37f2b5vyI4vyt6v3k+P5gfH3JAAANJ0lEQVR4nO1daXurKhCuuCbuxmgam///N2+MDDDI1tMseh/eD6c9jRoYZp8Bv748PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8no84/svdeZsnzxrJR5GXp4zcURzS+l/uvhbkgTFtnz+4t6I9ERJQ3Cd06H9zc/5d8LsDEk67pkYaBhgk6HLHe+tJIMSCMH3paF+KkzyZB3ecXJa3HhX3BuT08jG/CCpSLDOy8UajpMR86+UtI386vjXzmaf0Y7oxOcmiJYjJ8K7hPxOtoDTDkGDhJ5lei57xlSQMiky4e4/mtWISUUf3ta6/sS4MT2qfI0fiQbKuf0z+dqG8Qq5vncVT0NApEe5VxIM4TxKo/I1SvIJcb/yTHh7oaoi2gwNdfiwLN1EVhCtFGB8EfyJII/ThsNxKutcO/PlI6KRWHN1OnBpkxGt8ywRSdCsZouQ9vnDYLwHldRVD14UgB/36ngfLHBQ3Um1MfuW8bgDTMie1byRYW8JdyY4xjM7K0IfuTUiOxiXMK25wQYom9qdQZyqG5ZLiFQN+HW6UnbWxOmcNUs0XJYLgaGUgoZyzLxeDrmClv0LQk0Xy1R51+hShWC5pnj/gF6IjVsmOuVBkA1eaRmVwWmhRPnm0r8XBZdA8oucCYw43FskyRzObw7jMzJLJ6lfR2818AxW9w/MG+gZkC8PbMhU3TInCGstb1dAGsajCMLJdlxecEsQ+xTbcn1FN6PQc0t8jo4XDakcLLbK/j/B9cKdFw/niaM/9UVrsKiKhtLCvX4v0hTUaj8huaWEdc451Z2ZzKHdMC5uMRJlkUgvbDfuVERstIA0YgAduMyV71J1uNhVqBuQUgzWxZDP3aFPB1zIqww5IMd0XHPwMYiyNUV9rfO5gXwwaUJpc6gGikcfMElAdxgIIddqn5w72xVg0gSkbB3lyMB7MuhKDm0HjkX0Vz6zBNTchIEecOHqNmxK7HG0OdND6ZASrJPFQlgmNXgSuNhJvEaUluAa9GYrTSkGZaklYyfTbA2qzwu+hIIglHypFWj2TWTXKBpHTWWlqpqArZNeKBa1qY0xd8MCaCtgWqLOlXkGY8rHN2zvqO5r7zzxnUauaoZpd1gQgybd2FuK8uYDFOD7aEcJHb9rjJ3fGL02+Xn2bFtooListGLX9+VplwaoLS437ZVl1OfdttHro9/un8yeUYmYyqc/XIiCOVMAUIUFxPdeL/qDMtrd6KnhOcVs+yPBrKkg8UpzKG41+d9eAEdFpZH8kAyIIfeSn5/ZrjMaJ/QU7U53JcDiaJ/SwHHf1mBXjOFZVdf93zO6KddXltsbxMOymuBwPU2AVjLKv2yiSXbE4ivKmH2w3k2Aa/tRt/ybcLkdlx+59tcdTB/87G5/Buhq706gxPyS4bL3aXqoadkmYTT9DG0OcaS8LQRR7D1fidviZslD12HHD8WqSqliiugxgBGvXtkQIZ1hEmg8XhTImx59tao6kU2sJ4ZLMSUJmgJQI9jPRiMr2vI34R6IE/E/wEn+Im4TMoFIitFpQT/Yofw/pNha2llg6SHAYYDosy88Y3yX90K7EaYLHDYdA+jI7n70PeIsDIdUwL9VZKvjRyTj27UKSCxJ+kdDcGQ0VMi6k2IxN6dC4jj90KaE1leq/fq0CjCiwjNEUOPTw5T8Z+tZtpMZbsY2XjELGokBCIs3NijpEtDtgNrljGIXeclJsIPE3CJQIK5SVTUUhOZPVZChmV1OVuaGzX9IVICLIpagrkRof9zY6sdNdyk+L/dsxjU9kxZmUUzCHIGEwlZKvALr2IRaDur9c3JZmbod8PfiWMpKt83nUPZqbwqlOkRRnLPokRG4HpXz10AWTjqsGrjfIRyNYvt1DscWBNzpHfI3RVU0m+QoZtgfgm+Vwv6r9M+42QQyWxCWFsoqcMyG/qMR93d4paVbQRSeBqgrcmPb+3J5N1t+u7Zqg7lYFbIGy+QpSyMSgQkZa+otu3WEz2sdKrawYrNfgsLCVYqJSrxaDqEHBrgJNtMVDtg3nQ/XFwv71MZ4mqgBVgRpIPU7oI4ObBiHwZ7Kh4DAYdzBcRDlARFNKyOqqBt1vEgC27/ETUkIHGBr9yJs4FxSf6nPDiHsOIi2M4XmvNFVvATg/lv0LwpQRA7U6tpCmLF5naU1KVbbqLaCSbKvzCi46YgvTZnc0Gc4Y1kimUHzPW0DHZ91qz2oDIVKxWCliIMvJGcOqFUFKfj+Zv6F1/V5IZknLZSol4SuBMRxKyvTCd0eszrtawI2QOFzufhaB5Y6pX3sqj7YwvTux477DB4IKFIXGJlpgYQCf9Wi3D9NnaEFlxO7ZgPKUItRCRQQK3JQDLoqDfaDtXJZNa08H9ShD6xpw9zJS/3kNZDsT9mdra1ITugrTkzEqxq0Ad7awQ/hjsKnoQiEit4Uak4qt3gHqgpvdTl41lNerMdBC5HGxQmTJTtBGyQ+0MLFBGh3jSJwjclH1yhPJgphjN/vgudNVrwGMMjOJZ4liK9GUnLWxmagjUWBvXHGwTB85T4cptcJQ30UuFTYlOsZAbIHiXJP2TFgG4SPVZhZqZFpH74YXH7FvrWYMpCHBt8gUnyG0QNlPVQZYElwblVA5ynjiUsBZdaIYapanWy/uNCgU9wtgy/K57C+TgPCqdgrp6SgdS1wiN0hhV7E9BWMzseqq8mviK6Pq59qjmZBqTrihYhDemEBgn32QiSExGKRJG1NN4KtHp4p8DJwYd+5c2zLqXMzOD/WDJHeknZCdOWDFAzsrZr6vgENk5AcuasVHOzFioYa3agqhfvrDFEKMLwcw9SGgvfHHk+zP81LRqswOiAT/g4yfbkq5ikXAFA21F2ugV11OML715+7c31aqAHJ2D0usrC1HqViC3MDZnugEPXRsKxUR2h8Pl7i6hazsuKz2uucgRw1iDk1gb0CLThwkB+YEHNEgv8lqNkaglgMuJCAH9UFszdEUMT8AnMgNi/Sx9rXUJgDNKG6nkYLiBCsp9ih95WmBnJMt7dLMD4gahFRlAo4WM6NgVx0SVF9ccTIuY6faJWUlHYy6sQOi5bOKCZkyecmA6116q8A+cD8Sehrl46FXLTAbQK8+r1jISrOo2j54FshwTRupH19sc5dRX6mGSw+pnQFxut1TBp+dGYek7xS7MMi4TUrMaE6Kpn5CitO5fhAEnGpbZxWEH8sRCPX5VCife9iedIhIvgsVc8wvFJi6oXSTEpAQUg7dVGg2TWTp9jrBV2gumq00wqSy1TYajjgqFHfgJwWnbbOEgP6qnII4m2MxVtPpcknvKMty/nG5nKZqLOybkk79HnYVcZxsE+JLD3C8Y29buLklcJ2hC9XoL9vcP6MH7Ku924DsXzYsy2Qg82ZdeOanJ/dLNEK9Ne/TKfuFEEhUCLIp7R82g9bRd7qfnbvQeV12UxY4k+Rx4d0Olw0XCbqNcQOJil+BHkkgx49JXg/fI5owAvtk/B7Wewf2eSa28UgC1nxxHIbyfE4XfJ/Pw8AKSEr92H6qkP430HNR1K4hKyzL9T52FJs6zIAE6rZCdBsgJNX4RJD8kdQg61vRNUru8gAMGlFoWyEmFQOwQF3b+USP2t5EatMZtsOreb/WOr0RHLXOFJWhbWy0c8WSqTDE5qxtk5/lys6t1Pc9UUu9r7MJlwU0MTNr3wY5YmJjqJT3ezSq9GxCU8obKstkWWWoORmzoTfX7sEtweXgPHbi3OxHsrP4jB2jtH7klknfCkYXR4ApiMvXN5Q7zKcfQ/53V5HqkpmyvE+AneFJeLndnLcDZ2sH2T0Oet6vxVnGJ6WbTYj43P8jLeQuT7tD+T+mBd515vDexz0e4OlKC7FNySVHs2O+cND3PEfs0Me9S93pZEdmpAJf2F3rmLhYm43B9ZBivH/V2nCV7DGZ4+CDz5iwHTF0EC/YpQ9OYzOzNszXpVeLVd1lbEaDa2PGuuYU4CVH82vHU0taZJOwnA8+Q3jT21l4bRGZDBEJzWttqDvLAdCzrDWqifCmzFmr5MIWCr3GzVwEaXMozKPuBR2xxCAxJ472ECB4++auTCrrc1VLdsTfukz4u+54B7HuHLVuj6qTH4OgEhLh3Fa030PYdkWuKheCbcHYF+imO8W40ZFYWAs2vD2NKOwxpdXu6uxsS5DUm9wIr+EOjvKsIqETkBylzDHUDPblac2A1AR6fxvqeiSTQg7E7Ykk6AQ/FLq4dlYpeoDt0qaOeNzjnjZN7l/qtB9TqkYHkJ9dveiNglUESXC4XA4jPr6YTFrXI8UXElJU1cjaET5/BOG/oFtFG4IuMEVtuRyyidjXe2QZdGcZEKsTXSsbZmdYXx+5UcSaFuDOYT6Dhhq7ynQirJmdBK5HevfVqrOLWF/IvGWU2HSQym1T0YL2B72xgwR7a+CTMW8Con1pp+HXy3r7nqDBrSp3VUVVI276Yeibf2bvpG2af7/bw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8MB/wGmOXoiSJHnQgAAAABJRU5ErkJggg=="
              title="基于React 18"
              subtitle="组件使用React函数组件编写"
            />
            <HomeWidget
              imgSrc="data:image/png;base64,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"
              title="基于TypeScript"
              subtitle="所有组件的代码都采用TypeScript编写"
            />
            <HomeWidget
              imgSrc="https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png"
              title="代码简洁"
              subtitle="每个组件的源代码都清晰易懂"
            />
          </div>
        </Content>
      </Layout>
    </>
  );
};

export default Home;
