"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function ComboListPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [sortOrder, setSortOrder] = useState<"인기순" | "등록순">("인기순")

  const combos = [
    { title: "🥇 오늘은 내가 바리스타 #31", order: 1 },
    { title: "🥈 대환장 도파미 조합 #11", order: 2 },
    { title: "🥉 대환장 도파미 조합 #25", order: 3 },
  ]

  const sortedCombos = sortOrder === "등록순" ? [...combos].reverse() : combos

  const getBannerSrc = (category: string | null) => {
    if (category === "하체린지") return "/images/hot.png"
    if (category) return `/images/category-banners/${category}.png`
    return ""
  }

  return (
    <div
      className="relative bg-white overflow-hidden mx-auto"
      style={{ width: "375px", height: "812px" }}
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

      {/* 카테고리 버튼들 */}
      {[
        { name: "저렴조합", left: 19, icon: "group-36.png" },
        { name: "하체린지", left: 105, icon: "group-37.png" },
        { name: "다이어트", left: 191, icon: "group-38.png" },
        { name: "유명조합", left: 277, icon: "group-39.png" },
      ].map((cat) => (
        <button
          key={cat.name}
          onClick={() => setSelectedCategory(cat.name)}
          className="absolute transition-all duration-200 hover:scale-105 active:scale-95"
          style={{ width: "80px", height: "80px", left: `${cat.left}px`, top: "111px" }}
        >
          <div className="relative w-full h-full rounded-lg bg-gray-100">
            <Image
              src={`/images/category-icons/${cat.icon}`}
              alt={cat.name}
              fill
              className="object-contain rounded-lg"
            />
          </div>
        </button>
      ))}

      {/* 대표 이미지 영역 */}
      {selectedCategory === null ? (
        <>
          <Image
            src="/images/combination_main.png"
            alt="오늘 뭐 먹노?"
            width={180}
            height={20}
            className="absolute"
            style={{ left: "calc(50% - 90px + 0.5px)", top: "220px" }}
          />
          <Image
            src="/images/comb_Frame.png"
            alt="실시간 HOT 꿀조합"
            width={200}
            height={22}
            className="absolute"
            style={{ left: "calc(50% - 100px)", top: "265px" }}
          />
        </>
      ) : (
        <>
          <Image
            src={getBannerSrc(selectedCategory)}
            alt={`${selectedCategory} 배너`}
            width={180}
            height={20}
            className="absolute"
            style={{ left: "calc(50% - 90px + 0.5px)", top: "220px" }}
          />

          {/* 슬라이딩 정렬 탭 */}
          <div
            className="absolute"
            style={{
              top: "269px",
              left: "calc(50% - 93px)",
              width: "186px",
              height: "36px",
              borderRadius: "9999px",
              backgroundColor: "#F2F2F2",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              padding: "4px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "4px",
                left: sortOrder === "인기순" ? "4px" : "92px",
                width: "90px",
                height: "28px",
                borderRadius: "9999px",
                backgroundColor: "#B82424",
                transition: "left 0.3s ease",
                zIndex: 0,
              }}
            />

            <button
              onClick={() => setSortOrder("인기순")}
              style={{
                width: "90px",
                height: "28px",
                borderRadius: "9999px",
                fontWeight: 700,
                fontSize: "13px",
                backgroundColor: "transparent",
                border: "none",
                color: sortOrder === "인기순" ? "#FFFFFF" : "#000000",
                zIndex: 1,
                position: "relative",
              }}
            >
              인기순
            </button>
            <button
              onClick={() => setSortOrder("등록순")}
              style={{
                width: "90px",
                height: "28px",
                borderRadius: "9999px",
                fontWeight: 700,
                fontSize: "13px",
                backgroundColor: "transparent",
                border: "none",
                color: sortOrder === "등록순" ? "#FFFFFF" : "#000000",
                zIndex: 1,
                position: "relative",
              }}
            >
              등록순
            </button>
          </div>
        </>
      )}

    {/* Divider Line */}
    {selectedCategory === null && (
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
)}


      {/* 카드 리스트 */}
      {sortedCombos.map((combo, index) => {
        const top = 305 + index * 170
        return (
          <div
            key={combo.title}
            className="absolute"
            style={{ width: "324px", height: "150px", left: "26px", top: `${top}px` }}
          >
            <div
              className="absolute bg-gray-100 rounded-lg"
              style={{ width: "324px", height: "113.4px", top: "37px" }}
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
              {combo.title}
            </div>

            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="absolute bg-white rounded-lg shadow-md"
                style={{
                  width: "91.8px",
                  height: "91.8px",
                  left: `${11.88 + i * 103.68}px`,
                  top: "47.8px",
                }}
              />
            ))}
          </div>
        )
      })}
    </div>
  )
}
