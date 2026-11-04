"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Trophy, Target, Star, BookOpen, Calculator, GraduationCap, TrendingUp } from "lucide-react"

const examData = {
  cat: {
    title: "CAT / XAT",
    subtitle: "Based on percentile",
    icon: Trophy,
    color: "from-purple-500 to-indigo-600",
    bgGradient: "from-purple-50 to-indigo-50",
    tiers: [
      { range: "80 percentile and above", amount: 400000, tier: "Tier I", color: "from-yellow-400 to-yellow-600" },
      { range: "70-79 percentile", amount: 300000, tier: "Tier II", color: "from-orange-400 to-orange-600" },
      { range: "60-69 percentile", amount: 200000, tier: "Tier III", color: "from-gray-400 to-gray-600" },
      { range: "50-59 percentile", amount: 100000, tier: "Tier IV", color: "from-amber-600 to-amber-800" },
      { range: "45-49 percentile", amount: 50000, tier: "Tier V", color: "from-purple-400 to-purple-600" },
    ],
  },
  cmat: {
    title: "CMAT",
    subtitle: "Based on rank",
    icon: Target,
    color: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
    tiers: [
      { range: "Rank 1-1,000", amount: 400000, tier: "Tier I", color: "from-yellow-400 to-yellow-600" },
      { range: "Rank 1,001-2,000", amount: 300000, tier: "Tier II", color: "from-orange-400 to-orange-600" },
      { range: "Rank 2,001-3,000", amount: 200000, tier: "Tier III", color: "from-gray-400 to-gray-600" },
      { range: "Rank 3,001-4,000", amount: 100000, tier: "Tier IV", color: "from-amber-600 to-amber-800" },
      { range: "Rank 4,001-5,000", amount: 50000, tier: "Tier V", color: "from-purple-400 to-purple-600" },
    ],
  },
  mat: {
    title: "MAT / ATMA",
    subtitle: "Based on score",
    icon: Calculator,
    color: "from-rose-500 to-pink-600",
    bgGradient: "from-rose-50 to-pink-50",
    tiers: [
      { range: "Score 775 and above", amount: 400000, tier: "Tier I", color: "from-yellow-400 to-yellow-600" },
      { range: "Score 750-774", amount: 300000, tier: "Tier II", color: "from-orange-400 to-orange-600" },
      { range: "Score 700-749", amount: 200000, tier: "Tier III", color: "from-gray-400 to-gray-600" },
      { range: "Score 650-699", amount: 100000, tier: "Tier IV", color: "from-amber-600 to-amber-800" },
      { range: "Score 600-649", amount: 50000, tier: "Tier V", color: "from-purple-400 to-purple-600" },
    ],
  },
  icet: {
    title: "ICET",
    subtitle: "Based on rank",
    icon: GraduationCap,
    color: "from-cyan-500 to-purple-600",
    bgGradient: "from-cyan-50 to-purple-50",
    tiers: [
      { range: "Rank 1-200", amount: 400000, tier: "Tier I", color: "from-yellow-400 to-yellow-600" },
      { range: "Rank 201-400", amount: 300000, tier: "Tier II", color: "from-orange-400 to-orange-600" },
      { range: "Rank 401-600", amount: 200000, tier: "Tier III", color: "from-gray-400 to-gray-600" },
      { range: "Rank 601-800", amount: 100000, tier: "Tier IV", color: "from-amber-600 to-amber-800" },
      { range: "Rank 801-1,000", amount: 50000, tier: "Tier V", color: "from-purple-400 to-purple-600" },
    ],
  },
}

const ScholarshipCard = ({ tier, index }) => {
  const isTopTier = index === 0

  return (
    <div
      className="h-full transition-transform duration-200 hover:scale-[1.02]"
    >
      <Card
        className={`h-full relative overflow-hidden border-2 shadow-lg hover:shadow-xl transition-all duration-300 ${
          isTopTier ? "border-yellow-300 bg-gradient-to-br from-yellow-50 to-orange-50" : "border-slate-200 bg-white"
        }`}
      >
        {isTopTier && (
          <div className="absolute top-0 right-0">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
              HIGHEST
            </div>
          </div>
        )}

        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <Badge className={`bg-gradient-to-r ${tier.color} text-white font-semibold px-3 py-1`}>{tier.tier}</Badge>
            {isTopTier && <Star className="w-5 h-5 text-yellow-500 fill-current" />}
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-medium text-slate-600 leading-relaxed">{tier.range}</p>
          </div>

          <div
            className={`p-4 rounded-lg text-center ${
              isTopTier ? "bg-gradient-to-r from-yellow-400 to-orange-500" : `bg-gradient-to-r ${tier.color}`
            }`}
          >
            <p className="text-white/90 text-xs font-medium mb-1">Scholarship Amount</p>
            <p className="text-white text-xl font-bold">₹{tier.amount.toLocaleString()}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

const ExamSection = ({ examKey, examInfo }) => {
  const IconComponent = examInfo.icon

  return (
    <div className={`bg-gradient-to-br ${examInfo.bgGradient} rounded-2xl p-6 border border-slate-200`}>
      <div className="flex items-center gap-4 mb-6">
        <div className={`p-3 bg-gradient-to-r ${examInfo.color} rounded-xl shadow-lg`}>
          <IconComponent className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-slate-800">{examInfo.title}</h3>
          <p className="text-sm text-slate-600">{examInfo.subtitle}</p>
        </div>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {examInfo.tiers.map((tier, index) => (
          <ScholarshipCard key={index} tier={tier} index={index} />
        ))}
      </div>
    </div>
  )
}

export default function EntranceScholarships() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            {/* <div className="p-4 bg-gradient-to-r from-purple-500 via-purple-500 to-pink-500 rounded-full shadow-lg">
              <BookOpen className="w-8 h-8 text-white" />
            </div> */}
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Admission Merit Scholarships - Batch 2027-29
            </h1>
          </div>
            <p className="text-lg text-slate-600 leading-relaxed">
              Scholarship tiers are based on the qualifying entrance exam score or rank shown for each exam.
            </p>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="cat" className="w-full">
          <TabsList className="grid h-auto w-full grid-cols-2 lg:grid-cols-4 mb-8 bg-white shadow-lg rounded-xl p-1">
            <TabsTrigger
              value="cat"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white font-semibold rounded-lg transition-all duration-300"
            >
              CAT/XAT
            </TabsTrigger>
            <TabsTrigger
              value="cmat"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-teal-600 data-[state=active]:text-white font-semibold rounded-lg transition-all duration-300"
            >
              CMAT
            </TabsTrigger>
            <TabsTrigger
              value="mat"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-rose-500 data-[state=active]:to-pink-600 data-[state=active]:text-white font-semibold rounded-lg transition-all duration-300"
            >
              MAT/ATMA
            </TabsTrigger>
            <TabsTrigger
              value="icet"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-purple-600 data-[state=active]:text-white font-semibold rounded-lg transition-all duration-300"
            >
              ICET
            </TabsTrigger>
          </TabsList>

          {Object.entries(examData).map(([key, examInfo]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <ExamSection examKey={key} examInfo={examInfo} />
            </TabsContent>
          ))}
        </Tabs>

        {/* Footer Note */}
        <div
          className="mt-12"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200 max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-purple-500" />
              <h3 className="font-semibold text-slate-800">Important Information</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Scholarship amounts are in INR. The list is illustrative and non-exhaustive. Scorecards are subject to verification, and awards are governed by institute policy. These scholarships apply to Batch 2027-29.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
