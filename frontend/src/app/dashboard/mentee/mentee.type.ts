export type MentorshipProgramType = {
    id?: string
    publicId?: string
    company?: string
    title?: string
    description?: string
    instructors?: string[] // Mudado de "authors" para algo mais adequado
    mentors?: string[]
    category?: string
    tags?: string[]
    level?: string
    duration?: string
    language?: string
    mode?: string // Ex: "online", "in-person", "hybrid"
    price?: number 
    profileImageUrl?: string
    thumbnailUrl?: string
    reviews?: string
    providesCertificate?: boolean
    isOneOnOne?: boolean 
}
