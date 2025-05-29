"use client"

import { useState, useRef } from "react"
import { ArrowLeft, MoreHorizontal, Heart, MessageCircle, User, Send, X } from "lucide-react"
import Image from "next/image"

export default function PostDetailPage({ params }: { params: { id: string } }) {
  const [likes, setLikes] = useState(1)
  const [isLiked, setIsLiked] = useState(false)
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "덤블링하는 토끼",
      content: "얼음은 갠적으론 ㅈㄴ 조금한 미니미니한 얼음이 좋음 음료먹으면서 씹히면 기분 좋아짐",
      date: "05/23 02:00",
      password: "1234",
    },
    {
      id: 2,
      author: "책 읽는 오소리",
      content: "만들어 봤는데 수박에이드가 엄청 달아서 비율 조절 잘해야하고 물타면 괜찮음",
      date: "05/23 02:30",
      password: "5678",
    },
  ])
  const [newComment, setNewComment] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const toggleLike = () => {
    if (isLiked) setLikes((prev) => prev - 1)
    else setLikes((prev) => prev + 1)
    setIsLiked(!isLiked)
  }

  const handleCommentIcon = () => {
    inputRef.current?.focus()
  }

  const addComment = () => {
    if (newComment.trim() === "" || newPassword.trim() === "") return
    const now = new Date()
    const dateStr = `${(now.getMonth() + 1).toString().padStart(2, "0")}/${now.getDate().toString().padStart(2, "0")} ${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`

    const newCommentObj = {
      id: comments.length + 1,
      author: "나",
      content: newComment,
      date: dateStr,
      password: newPassword,
    }
    setComments([...comments, newCommentObj])
    setNewComment("")
    setNewPassword("")
  }

  const deleteComment = (id: number) => {
    const target = comments.find(c => c.id === id)
    if (!target) return
    const input = prompt("댓글 삭제를 위해 비밀번호를 입력하세요")
    if (input === target.password) {
      setComments(comments.filter(comment => comment.id !== id))
    } else {
      alert("비밀번호가 일치하지 않습니다")
    }
  }

  return (
    <div className="relative mx-auto bg-white" style={{ width: "375px", height: "812px" }}>
      {/* Header */}
      <div className="absolute flex items-center justify-between" style={{ width: "375px", top: "10px", height: "37px" }}>
        <button onClick={() => window.history.back()} className="absolute" style={{ left: "9px", top: "0px", width: "37px", height: "37px" }}>
          <ArrowLeft className="w-6 h-6 text-black" />
        </button>
        <h1 className="absolute text-black flex items-center" style={{ left: "calc(50% - 59px/2)", top: "5px", fontFamily: "Pretendard", fontWeight: 500, fontSize: "16px" }}>커뮤니티</h1>
        <button className="absolute" style={{ right: "9px", top: "0px", width: "37px", height: "37px" }}>
          <MoreHorizontal className="w-6 h-6 text-black" />
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="absolute overflow-y-auto" style={{ top: "66px", width: "375px", height: "686px", paddingBottom: "100px" }}>
        {/* 게시글 본문 */}
        <div className="px-5 py-4">
          <div className="flex items-center mb-3">
            <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center">
              <User className="w-6 h-6 text-gray-600" />
            </div>
            <div className="ml-3">
              <div className="text-sm font-semibold text-black">생각하는 반달곰</div>
              <div className="text-xs text-gray-500">05/23 01:04</div>
            </div>
          </div>
          <div className="text-base font-semibold text-black mb-2">나트륨 거의 없는 음식 없나</div>
          <div className="text-sm text-black leading-5">
            배 고픈데<br />편의점에 파는 것 중에서 나트륨 거의 없는거 있나요?
          </div>
        </div>

        {/* 공감, 댓글 수 */}
        <div className="flex items-center px-5 mb-4">
          <button
            className="flex items-center mr-6 transition-transform duration-300 ease-out active:scale-125"
            onClick={toggleLike}
          >
            <Heart className={`w-4 h-4 mr-1 ${isLiked ? "text-red-500 fill-red-500" : "text-gray-400"}`} />
            <span className={`text-sm ${isLiked ? "text-[#B81E22]" : "text-gray-500"}`}>공감 {likes}</span>
          </button>
          <button
            className="flex items-center transition-transform duration-300 ease-out active:scale-110"
            onClick={handleCommentIcon}
          >
            <MessageCircle className="w-4 h-4 text-gray-400 mr-1" />
            <span className="text-sm text-gray-500">댓글 {comments.length}</span>
          </button>
        </div>

        {/* 배너 */}
        <div className="relative mx-5 rounded-xl overflow-hidden h-[120px] mb-6">
          <Image src="/images/banner_image3.png" alt="배너" fill className="object-cover" />
        </div>

        {/* 댓글 목록 */}
        <div>
          {comments.map((comment) => (
            <div key={comment.id} className="px-5 py-4 border-b border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
                    <User className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="ml-2 text-sm font-semibold text-black">{comment.author}</div>
                </div>
                <button onClick={() => deleteComment(comment.id)} className="text-gray-400 hover:text-red-500">
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="text-sm text-black mb-1">{comment.content}</div>
              <div className="text-xs text-gray-500">{comment.date}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 댓글 입력창 */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-[375px] bg-white border-t border-gray-200 px-4 py-2 flex flex-col gap-2 z-50">
        <input
          ref={inputRef}
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="댓글을 입력하세요..."
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-full outline-none"
          onKeyDown={(e) => e.key === "Enter" && addComment()}
        />
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="비밀번호 설정"
          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-full outline-none"
          onKeyDown={(e) => e.key === "Enter" && addComment()}
        />
        <button onClick={addComment} className="self-end w-9 h-9 bg-[#B81E22] rounded-full text-white flex items-center justify-center">
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
