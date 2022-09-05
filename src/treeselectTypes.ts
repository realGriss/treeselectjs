export type ValueOptionType = string | number

export type OptionType = {
  value: ValueOptionType
  name: string
  children: OptionType[]
}

export interface ITreeselect {
  parentHtmlContainer: HTMLElement
  value: ValueOptionType[] | ValueOptionType
  options: OptionType[]
  openLevel: number
  appendToBody: boolean
  alwaysOpen: boolean
  showTags: boolean
  tagsCountText: string
  clearable: boolean
  searchable: boolean
  placeholder: string
  grouped: boolean
  listSlotHtmlComponent: HTMLElement | null
  disabled: boolean
  emptyText: string
  staticList: boolean
  id: string
  isSingleSelect: boolean
  showCount: boolean
  iconElements: IconsType
  isListOpened: boolean
  srcElement: HTMLElement | null
  inputCallback: ((value: ValueOptionType[] | ValueOptionType) => void) | undefined
  mount: () => void
  updateValue: (newValue: ValueOptionType[] | ValueOptionType) => void
  destroy: () => void
  focus: () => void
  toggleOpenClose: () => void
}

export interface ITreeselectParams {
  parentHtmlContainer: HTMLElement
  value?: ValueOptionType[] | ValueOptionType
  options?: OptionType[]
  openLevel?: number
  appendToBody?: boolean
  alwaysOpen?: boolean
  showTags?: boolean
  tagsCountText?: string
  clearable?: boolean
  searchable?: boolean
  placeholder?: string
  grouped?: boolean
  listSlotHtmlComponent?: HTMLElement | null
  disabled?: boolean
  emptyText?: string
  staticList?: boolean
  id?: string
  isSingleSelect?: boolean
  showCount?: boolean
  iconElements?: Partial<IconsType>
  inputCallback?: (value: ValueOptionType[] | ValueOptionType) => void
}

export type FlattedOptionType = {
  id: string | number
  name: string
  childOf: string | number
  isGroup: boolean
  checked: boolean
  isPartialChecked: boolean
  level: number
  isClosed: boolean
  hidden: boolean
}

export type IconsType = {
  arrowUp: string | HTMLElement
  arrowDown: string | HTMLElement
  arrowRight: string | HTMLElement
  attention: string | HTMLElement
  clear: string | HTMLElement
  cross: string | HTMLElement
  check: string | HTMLElement
  partialCheck: string | HTMLElement
}

export type SelectedNodesType = {
  nodes: FlattedOptionType[]
  groupedNodes: FlattedOptionType[]
}
