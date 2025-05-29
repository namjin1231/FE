"use client"

import { useState } from "react"
import { Heart, MessageCircle, Plus, ArrowLeft, User } from "lucide-react"

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState("일상글")

  const posts = [
    {
      id: 1,
      author: "생각하는 반달곰",
      title: "나트륨 거의 없는 음식 없나",
      content: "배 고픈데 편의점에 파는 것 중에서 나트륨 거의 없는거⋯",
      likes: 0,
      comments: 0,
      time: "10분",
    },
    {
      id: 2,
      author: "멍때리는 여우",
      title: "편의점 도시락 VS 햇반",
      content: "뭐 먹음",
      likes: 0,
      comments: 0,
      time: "25분",
    },
    {
      id: 3,
      author: "꿈꾸는 수달",
      title: "기숙사 사시는 분들",
      content: "닭가슴살 어떻게 해드시나요? 편의점에서 사먹자니 손해 보는 느낌이 들어서...",
      likes: 0,
      comments: 0,
      time: "43분",
    },
    {
      id: 4,
      author: "낮잠 자는 다람쥐",
      title: "편의점 알바 2일차인데",
      content: "배 고픈데 편의점에 파는 것 중에서 나트륨 거의 없는거⋯",
      likes: 0,
      comments: 0,
      time: "10분",
    },
  ]

  if (activeTab === "꿀조합") {
    return (
      <div
        className="relative bg-white overflow-hidden mx-auto"
        style={{
          width: "375px",
          height: "812px",
        }}
      >
        {/* Header */}
        <div
          className="absolute flex items-center justify-between"
          style={{ width: "375px", top: "54px", height: "37px" }}
        >
          {/* Back Button */}
          <button
            onClick={() => setActiveTab("일상글")}
            className="absolute"
            style={{
              left: "9px",
              top: "0px",
              width: "37px",
              height: "37px",
            }}
          >
            <ArrowLeft className="w-6 h-6 text-black" />
          </button>

          {/* Title */}
          <h1
            className="absolute text-black flex items-center"
            style={{
              width: "59px",
              height: "27px",
              left: "calc(50% - 59px/2)",
              top: "5px",
              fontFamily: "Pretendard",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "27px",
              letterSpacing: "-0.015em",
            }}
          >
            커뮤니티
          </h1>

          {/* Profile Button */}
          <button
            className="absolute"
            style={{
              right: "9px",
              top: "0px",
              width: "37px",
              height: "37px",
            }}
          >
            <User className="w-6 h-6 text-black" />
          </button>
        </div>

        {/* Tab Menu */}
        <div className="absolute" style={{ top: "122px", width: "375px", height: "27px" }}>
          {/* 인기글 */}
          <button
            onClick={() => setActiveTab("인기글")}
            className="absolute transition-all duration-300 ease-in-out"
            style={{
              width: "44px",
              height: "27px",
              left: "40px",
              top: "0px",
              fontFamily: "Pretendard",
              fontStyle: "normal",
              fontWeight: activeTab === "인기글" ? 600 : 400,
              fontSize: "16px",
              lineHeight: "27px",
              display: "flex",
              alignItems: "center",
              letterSpacing: "-0.015em",
              color: "#000000",
              border: "none",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            인기글
          </button>

          {/* 꿀조합 */}
          <button
            onClick={() => setActiveTab("꿀조합")}
            className="absolute transition-all duration-300 ease-in-out"
            style={{
              width: "44px",
              height: "27px",
              left: "calc(50% - 44px/2 - 1.5px)",
              top: "0px",
              fontFamily: "Pretendard",
              fontStyle: "normal",
              fontWeight: activeTab === "꿀조합" ? 600 : 400,
              fontSize: "16px",
              lineHeight: "27px",
              display: "flex",
              alignItems: "center",
              letterSpacing: "-0.015em",
              color: "#000000",
              border: "none",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            꿀조합
          </button>

          {/* 일상글 */}
          <button
            onClick={() => setActiveTab("일상글")}
            className="absolute transition-all duration-300 ease-in-out"
            style={{
              width: "44px",
              height: "27px",
              left: "289px",
              top: "0px",
              fontFamily: "Pretendard",
              fontStyle: "normal",
              fontWeight: activeTab === "일상글" ? 600 : 400,
              fontSize: "16px",
              lineHeight: "27px",
              display: "flex",
              alignItems: "center",
              letterSpacing: "-0.015em",
              color: "#000000",
              border: "none",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            일상글
          </button>
        </div>

        {/* Tab Border and Indicator */}
        <div className="absolute" style={{ top: "165px", width: "375px" }}>
          {/* Tab Underline */}
          <div
            className="absolute"
            style={{
              width: "377px",
              height: "0px",
              left: "0px",
              top: "0px",
              border: "1px solid #DBDBDB",
            }}
          />

          {/* Active Tab Indicator */}
          <div
            className="absolute transition-all duration-500 ease-in-out"
            style={{
              width: "126px",
              height: "2px",
              left:
                activeTab === "인기글" ? "0px" : activeTab === "꿀조합" ? "calc(50% - 126px/2)" : "calc(100% - 126px)",
              top: "-2px",
              background: "#B81E22",
            }}
          />
        </div>

        {/* 꿀조합 Posts List */}
        <div className="absolute" style={{ top: "165px", width: "375px" }}>
          {/* First Post */}
          <button
            onClick={() => (window.location.href = `/community/combo-1`)}
            className="absolute bg-white border-b border-gray-200 w-full text-left hover:bg-gray-50 transition-colors"
            style={{
              width: "375px",
              height: "280px",
              left: "0px",
              top: "0px",
            }}
          >
            {/* User Avatar */}
            <div
              className="absolute bg-gray-200 rounded-full flex items-center justify-center"
              style={{
                width: "37.7px",
                height: "38.34px",
                left: "18.34px",
                top: "18.83px",
              }}
            >
              <User className="w-5 h-5 text-gray-600" />
            </div>

            {/* Author Name */}
            <div
              className="absolute flex items-center"
              style={{
                width: "100px",
                height: "27.98px",
                left: "60.12px",
                top: "23.83px",
                fontFamily: "Pretendard",
                fontWeight: 600,
                fontSize: "12px",
                lineHeight: "27px",
                letterSpacing: "-0.015em",
                color: "#5C5C5C",
              }}
            >
              별을 세는 나그네
            </div>

            {/* Post Title */}
            <div
              className="absolute flex items-center"
              style={{
                width: "200px",
                height: "27.98px",
                left: "23.44px",
                top: "65.28px",
                fontFamily: "Pretendard",
                fontWeight: 600,
                fontSize: "14px",
                lineHeight: "27px",
                letterSpacing: "-0.015em",
                color: "#000000",
              }}
            >
              애들아 음료 조합 해봤는데
            </div>

            {/* Post Content */}
            <div
              className="absolute flex items-center"
              style={{
                width: "300px",
                height: "41.45px",
                left: "23.44px",
                top: "93.25px",
                fontFamily: "Pretendard",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "20px",
                letterSpacing: "-0.015em",
                color: "#000000",
              }}
            >
              이거 금요 하겠다고 딸기&우유 맛인 개추
            </div>

            {/* Combo Title */}
            <div
              className="absolute"
              style={{
                left: "23.44px",
                top: "125px",
                fontFamily: "Pretendard",
                fontWeight: 500,
                fontSize: "12px",
                color: "#666666",
              }}
            >
              오늘은 내가 바리스타 #31
            </div>

            {/* Product Images */}
            <div className="absolute flex space-x-3" style={{ left: "23.44px", top: "150px" }}>
              <div
                className="bg-white rounded-lg shadow-md flex items-center justify-center"
                style={{ width: "80px", height: "80px" }}
              >
                <div className="w-12 h-12 bg-gray-200 rounded"></div>
              </div>
              <div
                className="bg-white rounded-lg shadow-md flex items-center justify-center"
                style={{ width: "80px", height: "80px" }}
              >
                <div className="w-12 h-12 bg-red-200 rounded"></div>
              </div>
              <div
                className="bg-white rounded-lg shadow-md flex items-center justify-center"
                style={{ width: "80px", height: "80px" }}
              >
                <div className="w-12 h-12 bg-red-300 rounded"></div>
              </div>
            </div>

            {/* Like and Comment Section */}
            <div
              className="absolute flex items-center"
              style={{
                left: "23.44px",
                top: "245px",
              }}
            >
              <Heart className="w-4 h-4 text-gray-400 mr-2" />
              <span className="text-sm text-gray-400 mr-4">0</span>
              <MessageCircle className="w-4 h-4 text-gray-400 mr-2" />
              <span className="text-sm text-gray-400">0</span>
            </div>
          </button>

          {/* Second Post */}
          <button
            onClick={() => (window.location.href = `/community/combo-2`)}
            className="absolute bg-white border-b border-gray-200 w-full text-left hover:bg-gray-50 transition-colors"
            style={{
              width: "375px",
              height: "280px",
              left: "0px",
              top: "280px",
            }}
          >
            {/* User Avatar */}
            <div
              className="absolute bg-gray-200 rounded-full flex items-center justify-center"
              style={{
                width: "37.7px",
                height: "38.34px",
                left: "18.34px",
                top: "18.83px",
              }}
            >
              <User className="w-5 h-5 text-gray-600" />
            </div>

            {/* Author Name */}
            <div
              className="absolute flex items-center"
              style={{
                width: "100px",
                height: "27.98px",
                left: "60.12px",
                top: "23.83px",
                fontFamily: "Pretendard",
                fontWeight: 600,
                fontSize: "12px",
                lineHeight: "27px",
                letterSpacing: "-0.015em",
                color: "#5C5C5C",
              }}
            >
              노래하는 악어
            </div>

            {/* Post Title */}
            <div
              className="absolute flex items-center"
              style={{
                width: "200px",
                height: "27.98px",
                left: "23.44px",
                top: "65.28px",
                fontFamily: "Pretendard",
                fontWeight: 600,
                fontSize: "14px",
                lineHeight: "27px",
                letterSpacing: "-0.015em",
                color: "#000000",
              }}
            >
              나 아빠지
            </div>

            {/* Post Content */}
            <div
              className="absolute"
              style={{
                width: "300px",
                left: "23.44px",
                top: "93.25px",
                fontFamily: "Pretendard",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "20px",
                letterSpacing: "-0.015em",
                color: "#000000",
              }}
            >
              요즘 이거 중독되서 3일째 먹는 중인데
              <br />
              매일 아침마다 고통받는다
            </div>

            {/* Combo Title */}
            <div
              className="absolute"
              style={{
                left: "23.44px",
                top: "125px",
                fontFamily: "Pretendard",
                fontWeight: 500,
                fontSize: "12px",
                color: "#666666",
              }}
            >
              대환장 도파민 조합 #11
            </div>

            {/* Product Images */}
            <div className="absolute flex space-x-3" style={{ left: "23.44px", top: "150px" }}>
              <div
                className="bg-white rounded-lg shadow-md flex items-center justify-center"
                style={{ width: "80px", height: "80px" }}
              >
                <div className="w-12 h-12 bg-orange-200 rounded"></div>
              </div>
              <div
                className="bg-white rounded-lg shadow-md flex items-center justify-center"
                style={{ width: "80px", height: "80px" }}
              >
                <div className="w-12 h-12 bg-blue-200 rounded"></div>
              </div>
              <div
                className="bg-white rounded-lg shadow-md flex items-center justify-center"
                style={{ width: "80px", height: "80px" }}
              >
                <div className="w-12 h-12 bg-yellow-200 rounded"></div>
              </div>
            </div>

            {/* Like and Comment Section */}
            <div
              className="absolute flex items-center"
              style={{
                left: "23.44px",
                top: "245px",
              }}
            >
              <Heart className="w-4 h-4 text-gray-400 mr-2" />
              <span className="text-sm text-gray-400 mr-4">0</span>
              <MessageCircle className="w-4 h-4 text-gray-400 mr-2" />
              <span className="text-sm text-gray-400">0</span>
            </div>
          </button>
        </div>

        {/* Add Post Button */}
        <button
          className="absolute bg-red-600 rounded-full flex items-center justify-center"
          style={{
            width: "65px",
            height: "65px",
            left: "296px",
            top: "740px",
          }}
        >
          <Plus className="w-8 h-8 text-white" />
        </button>
      </div>
    )
  }

  return (
    <div
      className="relative bg-white overflow-hidden mx-auto"
      style={{
        width: "375px",
        height: "812px",
      }}
    >
      {/* Header */}
      <div
        className="absolute flex items-center justify-between"
        style={{ width: "375px", top: "54px", height: "37px" }}
      >
        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="absolute"
          style={{
            left: "9px",
            top: "0px",
            width: "37px",
            height: "37px",
          }}
        >
          <ArrowLeft className="w-6 h-6 text-black" />
        </button>

        {/* Title */}
        <h1
          className="absolute text-black flex items-center"
          style={{
            width: "59px",
            height: "27px",
            left: "calc(50% - 59px/2)",
            top: "5px",
            fontFamily: "Pretendard",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "27px",
            letterSpacing: "-0.015em",
          }}
        >
          커뮤니티
        </h1>

        {/* Profile Button */}
        <button
          className="absolute"
          style={{
            right: "9px",
            top: "0px",
            width: "37px",
            height: "37px",
          }}
        >
          <User className="w-6 h-6 text-black" />
        </button>
      </div>

      {/* Tab Menu */}
      <div className="absolute" style={{ top: "122px", width: "375px", height: "27px" }}>
        {/* 인기글 */}
        <button
          onClick={() => setActiveTab("인기글")}
          className="absolute transition-all duration-300 ease-in-out"
          style={{
            width: "44px",
            height: "27px",
            left: "40px",
            top: "0px",
            fontFamily: "Pretendard",
            fontStyle: "normal",
            fontWeight: activeTab === "인기글" ? 600 : 400,
            fontSize: "16px",
            lineHeight: "27px",
            display: "flex",
            alignItems: "center",
            letterSpacing: "-0.015em",
            color: "#000000",
            border: "none",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          인기글
        </button>

        {/* 꿀조합 */}
        <button
          onClick={() => setActiveTab("꿀조합")}
          className="absolute transition-all duration-300 ease-in-out"
          style={{
            width: "44px",
            height: "27px",
            left: "calc(50% - 44px/2 - 1.5px)",
            top: "0px",
            fontFamily: "Pretendard",
            fontStyle: "normal",
            fontWeight: activeTab === "꿀조합" ? 600 : 400,
            fontSize: "16px",
            lineHeight: "27px",
            display: "flex",
            alignItems: "center",
            letterSpacing: "-0.015em",
            color: "#000000",
            border: "none",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          꿀조합
        </button>

        {/* 일상글 */}
        <button
          onClick={() => setActiveTab("일상글")}
          className="absolute transition-all duration-300 ease-in-out"
          style={{
            width: "44px",
            height: "27px",
            left: "289px",
            top: "0px",
            fontFamily: "Pretendard",
            fontStyle: "normal",
            fontWeight: activeTab === "일상글" ? 600 : 400,
            fontSize: "16px",
            lineHeight: "27px",
            display: "flex",
            alignItems: "center",
            letterSpacing: "-0.015em",
            color: "#000000",
            border: "none",
            background: "transparent",
            cursor: "pointer",
          }}
        >
          일상글
        </button>
      </div>

      {/* Tab Border and Indicator */}
      <div className="absolute" style={{ top: "165px", width: "375px" }}>
        {/* Tab Underline */}
        <div
          className="absolute"
          style={{
            width: "377px",
            height: "0px",
            left: "0px",
            top: "0px",
            border: "1px solid #DBDBDB",
          }}
        />

        {/* Active Tab Indicator */}
        <div
          className="absolute transition-all duration-500 ease-in-out"
          style={{
            width: "126px",
            height: "2px",
            left:
              activeTab === "인기글" ? "0px" : activeTab === "꿀조합" ? "calc(50% - 126px/2)" : "calc(100% - 126px)",
            top: "-2px",
            background: "#B81E22",
          }}
        />
      </div>

      {/* Posts List */}
      <div className="absolute" style={{ top: "165px", width: "375px" }}>
        {posts.map((post, index) => (
          <button
            key={post.id}
            onClick={() => (window.location.href = `/community/${post.id}`)}
            className="absolute bg-white border-b border-gray-200 w-full text-left hover:bg-gray-50 transition-colors"
            style={{
              width: "375px",
              height: "186.51px",
              left: "0px",
              top: `${index * 187}px`,
            }}
          >
            {/* User Avatar */}
            <div
              className="absolute bg-gray-200 rounded-full flex items-center justify-center"
              style={{
                width: "37.7px",
                height: "38.34px",
                left: "18.34px",
                top: "18.83px",
              }}
            >
              <User className="w-5 h-5 text-gray-600" />
            </div>

            {/* Author Name */}
            <div
              className="absolute flex items-center"
              style={{
                width: "82.54px",
                height: "27.98px",
                left: "60.12px",
                top: "23.83px",
                fontFamily: "Pretendard",
                fontWeight: 600,
                fontSize: "12px",
                lineHeight: "27px",
                letterSpacing: "-0.015em",
                color: "#5C5C5C",
              }}
            >
              {post.author}
            </div>

            {/* Post Title */}
            <div
              className="absolute flex items-center"
              style={{
                width: "156.93px",
                height: "27.98px",
                left: "23.44px",
                top: "65.28px",
                fontFamily: "Pretendard",
                fontWeight: 600,
                fontSize: "14px",
                lineHeight: "27px",
                letterSpacing: "-0.015em",
                color: "#000000",
              }}
            >
              {post.title}
            </div>

            {/* Post Content */}
            <div
              className="absolute flex items-center"
              style={{
                width: index === 2 ? "283px" : "266.98px",
                height: index === 2 ? "42px" : "41.45px",
                left: index === 2 ? "23px" : "23.44px",
                top: index === 2 ? "93px" : "93.25px",
                fontFamily: "Pretendard",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "20px",
                letterSpacing: "-0.015em",
                color: "#000000",
              }}
            >
              {post.content}
            </div>

            {/* Time */}
            <div
              className="absolute flex items-center"
              style={{
                width: post.time === "43분" ? "29px" : post.time === "25분" ? "38px" : "26.49px",
                height: post.time === "43분" ? "21px" : post.time === "25분" ? "21px" : "20.72px",
                left: "332px",
                top: index === 2 ? "150px" : "150.24px",
                fontFamily: "Pretendard",
                fontWeight: 600,
                fontSize: "12px",
                lineHeight: "20px",
                letterSpacing: "-0.015em",
                color: "#BFBFBF",
              }}
            >
              {post.time}
            </div>

            {/* Like and Comment Section */}
            <div
              className="absolute flex items-center"
              style={{
                width: "76.43px",
                height: "27.98px",
                left: "23.44px",
                top: "144.03px",
              }}
            >
              {/* Heart Icon */}
              <Heart
                className="absolute"
                style={{
                  width: "15.41px",
                  height: "15.41px",
                  left: "0px",
                  top: "6.28px",
                  color: "#BFBFBF",
                }}
              />

              {/* Like Count */}
              <span
                className="absolute"
                style={{
                  width: "9.17px",
                  height: "27.98px",
                  left: "20.38px",
                  top: "0px",
                  fontFamily: "Pretendard",
                  fontWeight: 500,
                  fontSize: "12px",
                  lineHeight: "27px",
                  letterSpacing: "-0.015em",
                  color: "#BFBFBF",
                }}
              >
                {post.likes}
              </span>

              {/* Comment Icon */}
              <MessageCircle
                className="absolute"
                style={{
                  width: "15.41px",
                  height: "15.41px",
                  left: "41.68px",
                  top: "6.28px",
                  color: "#BFBFBF",
                }}
              />

              {/* Comment Count */}
              <span
                className="absolute"
                style={{
                  width: "9.17px",
                  height: "27.98px",
                  left: "67.25px",
                  top: "0px",
                  fontFamily: "Pretendard",
                  fontWeight: 500,
                  fontSize: "12px",
                  lineHeight: "27px",
                  letterSpacing: "-0.015em",
                  color: "#BFBFBF",
                }}
              >
                {post.comments}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Add Post Button */}
      <button
        className="absolute bg-red-600 rounded-full flex items-center justify-center"
        style={{
          width: "65px",
          height: "65px",
          left: "296px",
          top: "740px",
        }}
      >
        <Plus className="w-8 h-8 text-white" />
      </button>
    </div>
  )
}
