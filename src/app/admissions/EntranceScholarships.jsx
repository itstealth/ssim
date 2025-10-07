import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Trophy, Target, Star, BookOpen, Calculator, GraduationCap, TrendingUp } from "lucide-react"

const examData = {
  cat: {
    title: "CAT 2024 / XAT 2025 / GMAT",
    subtitle: "Based on Percentile Score",
    icon: Trophy,
    color: "from-purple-500 to-indigo-600",
    bgGradient: "from-purple-50 to-indigo-50",
    tiers: [
      { range: "80 percentile and above", amount: 90000, tier: "Platinum", color: "from-yellow-400 to-yellow-600" },
      { range: "70 – 79.99 percentile", amount: 80000, tier: "Gold", color: "from-orange-400 to-orange-600" },
      { range: "60 – 69.99 percentile", amount: 70000, tier: "Silver", color: "from-gray-400 to-gray-600" },
      { range: "55 – 59.99 percentile", amount: 55000, tier: "Bronze", color: "from-amber-600 to-amber-800" },
      { range: "50 – 54.99 percentile", amount: 50000, tier: "Merit", color: "from-blue-400 to-blue-600" },
    ],
  },
  cmat: {
    title: "CMAT 2025",
    subtitle: "Based on Rank",
    icon: Target,
    color: "from-emerald-500 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
    tiers: [
      { range: "Rank ≤ 6000", amount: 90000, tier: "Platinum", color: "from-yellow-400 to-yellow-600" },
      { range: "Rank 6001 – 12999", amount: 80000, tier: "Gold", color: "from-orange-400 to-orange-600" },
      { range: "Rank 13000 – 17999", amount: 70000, tier: "Silver", color: "from-gray-400 to-gray-600" },
      { range: "Rank 18000 – 21999", amount: 65000, tier: "Bronze", color: "from-amber-600 to-amber-800" },
      { range: "Rank 22000 – 29999", amount: 60000, tier: "Merit", color: "from-blue-400 to-blue-600" },
    ],
  },
  mat: {
    title: "MAT 2024 & 2025 / ATMA 2024 & 2025",
    subtitle: "Based on Composite Score",
    icon: Calculator,
    color: "from-rose-500 to-pink-600",
    bgGradient: "from-rose-50 to-pink-50",
    tiers: [
      { range: "Composite Score ≥ 700", amount: 70000, tier: "Platinum", color: "from-yellow-400 to-yellow-600" },
      { range: "Composite Score 650 – 699", amount: 60000, tier: "Gold", color: "from-orange-400 to-orange-600" },
      { range: "Composite Score 600 – 649", amount: 50000, tier: "Silver", color: "from-gray-400 to-gray-600" },
      { range: "Composite Score 550 – 599", amount: 45000, tier: "Bronze", color: "from-amber-600 to-amber-800" },
      { range: "Composite Score 500 – 549", amount: 40000, tier: "Merit", color: "from-blue-400 to-blue-600" },
    ],
  },
  icet: {
    title: "ICET 2025",
    subtitle: "Based on Rank",
    icon: GraduationCap,
    color: "from-cyan-500 to-blue-600",
    bgGradient: "from-cyan-50 to-blue-50",
    tiers: [
      { range: "Rank ≤ 3000", amount: 60000, tier: "Platinum", color: "from-yellow-400 to-yellow-600" },
      { range: "Rank 3001 – 9999", amount: 50000, tier: "Gold", color: "from-orange-400 to-orange-600" },
      { range: "Rank 10000 – 12000", amount: 40000, tier: "Silver", color: "from-gray-400 to-gray-600" },
      { range: "Rank 12001 – 19999", amount: 30000, tier: "Bronze", color: "from-amber-600 to-amber-800" },
      { range: "Rank 20000 – 24999", amount: 25000, tier: "Merit", color: "from-blue-400 to-blue-600" },
    ],
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
}

const ScholarshipCard = ({ tier, index }) => {
  const isTopTier = index === 0

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      className="h-full"
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
    </motion.div>
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

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {examInfo.tiers.map((tier, index) => (
          <ScholarshipCard key={index} tier={tier} index={index} />
        ))}
      </motion.div>
    </div>
  )
}

export default function EntranceScholarships() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            {/* <div className="p-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg">
              <BookOpen className="w-8 h-8 text-white" />
            </div> */}
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Criteria-2: Entrance Exam Scholarships
            </h1>
          </div>
          <p className="text-lg text-slate-600 leading-relaxed">
            Scholarship rewards based on your performance in various entrance examinations. Choose your exam category to
            view eligible scholarship amounts.
          </p>
        </motion.div>

        {/* Tabs Section */}
        <Tabs defaultValue="cat" className="w-full">
          <TabsList className="grid h-auto w-full grid-cols-2 lg:grid-cols-4 mb-8 bg-white shadow-lg rounded-xl p-1">
            <TabsTrigger
              value="cat"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white font-semibold rounded-lg transition-all duration-300"
            >
              CAT/XAT/GMAT
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
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-600 data-[state=active]:text-white font-semibold rounded-lg transition-all duration-300"
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              <h3 className="font-semibold text-slate-800">Important Information</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              All scholarship amounts are in INR and subject to verification of official scorecards. Students must
              provide valid entrance exam certificates to claim their respective scholarships. Scholarships are
              applicable for the academic year 2024-25 and may be subject to institutional policies.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
