import { SanityDocument } from "@sanity/client";

export interface BlogPost extends SanityDocument {
	title: string,
	content: Body[],
	image: Image,
	publishedAt: string,
	slug: Slug
}

export interface SanityDocument2 {
	publishedAt: Date;
	title:       string;
	image:       Image;
	_createdAt:  Date;
	_rev:        string;
	_type:       string;
	_id:         string;
	body:        Body[];
	_updatedAt:  Date;
	slug:        Slug;
}

export interface Body {
	style:    string;
	_key:     string;
	markDefs: any[];
	children: Child[];
	_type:    string;
}

export interface Child {
	_type: string;
	marks: any[];
	text:  string;
	_key:  string;
}

export interface Image {
	_type: string;
	asset: Asset;
}

export interface Asset {
	_ref:  string;
	_type: string;
}

export interface Slug {
	current: string;
	_type:   string;
}
