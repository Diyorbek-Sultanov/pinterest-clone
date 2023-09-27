export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      coments: {
        Row: {
          created_at: string
          id: number
          pin_id: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          pin_id?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          pin_id?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "coments_pin_id_fkey"
            columns: ["pin_id"]
            referencedRelation: "pins"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "coments_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      liked_pins: {
        Row: {
          created_at: string
          pin_id: number | null
          user_id: string
        }
        Insert: {
          created_at?: string
          pin_id?: number | null
          user_id: string
        }
        Update: {
          created_at?: string
          pin_id?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "liked_pins_pin_id_fkey"
            columns: ["pin_id"]
            referencedRelation: "pins"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "liked_pins_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      pins: {
        Row: {
          created_at: string
          description: string | null
          id: number
          image_path: string | null
          title: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          image_path?: string | null
          title?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          image_path?: string | null
          title?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pins_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          avatar_url: string | null
          created_at: string
          id: string
          name: string | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          id?: string
          name?: string | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          id?: string
          name?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
