"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function ComboListPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <div
      className="relative bg-white overflow-hidden mx-auto"
      style={{
        width: "375px",
        height: "812px",
      }}
    >
      {/* Header */}
      <div className="absolute" style={{ top: "58px", left: "9px", width: "37px", height: "37px" }}>
        <button onClick={() => window.history.back()}>
          <ArrowLeft className="w-6 h-6 text-black" />
        </button>
      </div>

      <h1
        className="absolute text-black flex items-center"
        style={{
          width: "44px",
          height: "27px",
          left: "calc(50% - 44px/2 + 0.5px)",
          top: "63px",
          fontFamily: "Pretendard",
          fontWeight: 500,
          fontSize: "16px",
          lineHeight: "27px",
          letterSpacing: "-0.015em",
        }}
      >
        꿀조합
      </h1>

      {/* Category Buttons */}
      {/* Group 36 - 저렴조합 */}
      <button
        onClick={() => setSelectedCategory("저렴조합")}
        className="absolute transition-all duration-200 hover:scale-105 active:scale-95"
        style={{
          width: "80px",
          height: "80px",
          left: "19px",
          top: "111px",
        }}
      >
        <div
          className="absolute bg-gray-100 rounded-lg"
          style={{
            width: "80px",
            height: "80px",
            left: "0px",
            top: "0px",
          }}
        />
        <Image
          src="/images/category-icons/group-36.png"
          alt="저렴조합"
          width={80}
          height={80}
          className="absolute top-0 left-0"
        />
      </button>

      {/* Group 37 - 맛챌린지 */}
      <button
        onClick={() => setSelectedCategory("맛챌린지")}
        className="absolute transition-all duration-200 hover:scale-105 active:scale-95"
        style={{
          width: "80px",
          height: "80px",
          left: "105px",
          top: "111px",
        }}
      >
        <div
          className="absolute bg-gray-100 rounded-lg"
          style={{
            width: "80px",
            height: "80px",
            left: "0px",
            top: "0px",
          }}
        />
        <Image
          src="/images/category-icons/group-37.png"
          alt="맛챌린지"
          width={80}
          height={80}
          className="absolute top-0 left-0"
        />
      </button>

      {/* Group 38 - 다이어트 */}
      <button
        onClick={() => setSelectedCategory("다이어트")}
        className="absolute transition-all duration-200 hover:scale-105 active:scale-95"
        style={{
          width: "80px",
          height: "80px",
          left: "191px",
          top: "111px",
        }}
      >
        <div
          className="absolute bg-gray-100 rounded-lg"
          style={{
            width: "80px",
            height: "80px",
            left: "0px",
            top: "0px",
          }}
        />
        <Image
          src="/images/category-icons/group-38.png"
          alt="다이어트"
          width={80}
          height={80}
          className="absolute top-0 left-0"
        />
      </button>

      {/* Group 39 - 유명조합 */}
      <button
        onClick={() => setSelectedCategory("유명조합")}
        className="absolute transition-all duration-200 hover:scale-105 active:scale-95"
        style={{
          width: "80px",
          height: "80px",
          left: "277px",
          top: "111px",
        }}
      >
        <div
          className="absolute bg-gray-100 rounded-lg"
          style={{
            width: "80px",
            height: "80px",
            left: "0px",
            top: "0px",
          }}
        />
        <Image
          src="/images/category-icons/group-39.png"
          alt="유명조합"
          width={80}
          height={80}
          className="absolute top-0 left-0"
        />
      </button>

      {/* "오늘 뭐 먹노?" Section */}
      <div
        className="absolute text-center"
        style={{
          width: "180px",
          height: "17px",
          left: "calc(50% - 180px/2 + 0.5px)",
          top: "220px",
          fontFamily: "Pretendard",
          fontWeight: 600,
          fontSize: "20px",
          letterSpacing: "-0.015em",
          color: "#000000",
        }}
      >
        🍴 오늘 뭐 먹노? 🍴
      </div>

      {/* Divider Line */}
      <div
        className="absolute"
        style={{
          width: "250px",
          height: "0px",
          left: "calc(50% - 250px/2 + 0.5px)",
          top: "250px",
          border: "0.7px solid #D0D0D0",
        }}
      />

      {/* 실시간 HOT 꿀조합 Title */}
      <h2
        className="absolute text-center"
        style={{
          width: "200px",
          left: "calc(50% - 200px/2)",
          top: "265px",
          fontFamily: "Pretendard",
          fontWeight: 600,
          fontSize: "18px",
          letterSpacing: "-0.015em",
          color: "#000000",
        }}
      >
        실시간 HOT 꿀조합
      </h2>

      {/* Hot Combo Cards */}
      {/* Card 1 */}
      <div
        className="absolute"
        style={{
          width: "324px",
          height: "150px",
          left: "26px",
          top: "315px",
        }}
      >
        <div
          className="absolute bg-gray-100 rounded-lg"
          style={{
            width: "324px",
            height: "113.4px",
            left: "0px",
            top: "37px",
          }}
        />
        <div
          className="absolute text-black"
          style={{
            left: "5px",
            top: "10px",
            fontFamily: "Pretendard",
            fontWeight: 600,
            fontSize: "15px",
            letterSpacing: "-0.015em",
          }}
        >
          🥇 오늘은 내가 바리스타 #31
        </div>

        {/* Product Cards */}
        <div
          className="absolute bg-white rounded-lg shadow-md"
          style={{
            width: "91.8px",
            height: "91.8px",
            left: "11.88px",
            top: "47.8px",
          }}
        />
        <div
          className="absolute bg-white rounded-lg shadow-md"
          style={{
            width: "91.8px",
            height: "91.8px",
            left: "115.56px",
            top: "47.8px",
          }}
        />
        <div
          className="absolute bg-white rounded-lg shadow-md"
          style={{
            width: "91.8px",
            height: "91.8px",
            left: "219.24px",
            top: "47.8px",
          }}
        />
      </div>

      {/* Card 2 */}
      <div
        className="absolute"
        style={{
          width: "324px",
          height: "150px",
          left: "26px",
          top: "485px",
        }}
      >
        <div
          className="absolute bg-gray-100 rounded-lg"
          style={{
            width: "324px",
            height: "113.4px",
            left: "0px",
            top: "37px",
          }}
        />
        <div
          className="absolute text-black"
          style={{
            left: "5px",
            top: "10px",
            fontFamily: "Pretendard",
            fontWeight: 600,
            fontSize: "15px",
            letterSpacing: "-0.015em",
          }}
        >
          🥈 대환장 도파민 조합 #11
        </div>

        {/* Product Cards */}
        <div
          className="absolute bg-white rounded-lg shadow-md"
          style={{
            width: "91.8px",
            height: "91.8px",
            left: "11.88px",
            top: "47.8px",
          }}
        />
        <div
          className="absolute bg-white rounded-lg shadow-md"
          style={{
            width: "91.8px",
            height: "91.8px",
            left: "115.56px",
            top: "47.8px",
          }}
        />
        <div
          className="absolute bg-white rounded-lg shadow-md"
          style={{
            width: "91.8px",
            height: "91.8px",
            left: "219.24px",
            top: "47.8px",
          }}
        />
      </div>

      {/* Card 3 */}
      <div
        className="absolute"
        style={{
          width: "324px",
          height: "150px",
          left: "26px",
          top: "655px",
        }}
      >
        <div
          className="absolute bg-gray-100 rounded-lg"
          style={{
            width: "324px",
            height: "113.4px",
            left: "0px",
            top: "37px",
          }}
        />
        <div
          className="absolute text-black"
          style={{
            left: "5px",
            top: "10px",
            fontFamily: "Pretendard",
            fontWeight: 600,
            fontSize: "15px",
            letterSpacing: "-0.015em",
          }}
        >
          🥉 대환장 도파민 조합 #25
        </div>

        {/* Product Cards */}
        <div
          className="absolute bg-white rounded-lg shadow-md"
          style={{
            width: "91.8px",
            height: "91.8px",
            left: "11.88px",
            top: "47.8px",
          }}
        />
        <div
          className="absolute bg-white rounded-lg shadow-md"
          style={{
            width: "91.8px",
            height: "91.8px",
            left: "115.56px",
            top: "47.8px",
          }}
        />
        <div
          className="absolute bg-white rounded-lg shadow-md"
          style={{
            width: "91.8px",
            height: "91.8px",
            left: "219.24px",
            top: "47.8px",
          }}
        />
      </div>

      {/* Selected Category Overlay */}
      {selectedCategory && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-lg font-bold mb-4">{selectedCategory} 선택됨</h3>
            <p className="mb-4">{selectedCategory} 카테고리의 조합들을 보여줍니다.</p>
            <button onClick={() => setSelectedCategory(null)} className="bg-red-600 text-white px-4 py-2 rounded">
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
