export interface GitRepoItem {
    id:number;
    full_name: string;
    owner: GitOwner;
}

export interface GitOwner {
  id: number;
  avatar_url: string;
}

export interface DataResult<T> {
  incomplete_results: boolean;
  items: T[];
  total_count: number;
}
