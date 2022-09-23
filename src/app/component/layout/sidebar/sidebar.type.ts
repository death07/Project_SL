export interface IXlogSidebarItem {
    id: string;
    title: string;
    type: 'basic' | 'collapsable';
    icon?: string;
    collapseItem?: boolean;
    badge?: {
        title?: string;
        translate?: string;
        bg?: string;
        fg?: string;
    };
    active?: boolean;
    router?: string;
    children?: IXlogSidebarItem[];
}