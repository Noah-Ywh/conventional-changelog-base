export interface Commit {
  type: string
  notes: { author: string; note: string }[]
  revert: unknown
  scope: string
  subject: string
  hash: string
  shortHash: string
  references: { issue: string }[]
}
export interface Content {
  repository: string
  host: string
  owner: string
  repoUrl: string
}
