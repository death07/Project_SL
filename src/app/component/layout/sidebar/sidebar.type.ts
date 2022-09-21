export interface IXlogSidebarItem {
    id: string;
    title: string;
    type: 'basic' | 'collapsable';
    icon?: string;
    badge?: {
        title?: string;
        translate?: string;
        bg?: string;
        fg?: string;
    };
    active?: boolean;
    children?: IXlogSidebarItem[];
}