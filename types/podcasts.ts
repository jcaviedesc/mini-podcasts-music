export interface Toppodcasts {
  feed: Feed;
}

export interface Feed {
  author: Author;
  entry: Podcast[];
  icon: AttributeWithLabel;
  id: AttributeWithLabel;
  link: Link[];
  rights: AttributeWithLabel;
  title: AttributeWithLabel;
  updated: AttributeWithLabel;
}

export interface Author {
  name: AttributeWithLabel;
  uri: AttributeWithLabel;
}

export interface AttributeWithLabel {
  label: string;
}

export interface Podcast {
  category: Category;
  id: ID;
  "im:artist": IMArtist;
  "im:contentType": IMContentType;
  "im:image": IMImage[];
  "im:name": AttributeWithLabel;
  "im:price": IMPrice;
  "im:releaseDate": IMReleaseDate;
  link: Link;
  rights?: AttributeWithLabel;
  summary: AttributeWithLabel;
  title: AttributeWithLabel;
}

export interface Category {
  attributes: CategoryAttributes;
}

export interface CategoryAttributes {
  "im:id": string;
  label: PurpleLabel;
  scheme: string;
  term: PurpleLabel;
}

export enum PurpleLabel {
  Music = "Music",
  MusicCommentary = "Music Commentary",
  MusicHistory = "Music History",
  MusicInterviews = "Music Interviews",
}

export interface ID {
  attributes: IDAttributes;
  label: string;
}

export interface IDAttributes {
  "im:id": string;
}

export interface IMArtist {
  attributes?: IMArtistAttributes;
  label: string;
}

export interface IMArtistAttributes {
  href: string;
}

export interface IMContentType {
  attributes: IMContentTypeAttributes;
}

export interface IMContentTypeAttributes {
  label: FluffyLabel;
  term: FluffyLabel;
}

export enum FluffyLabel {
  Podcast = "Podcast",
}

export interface IMImage {
  attributes: IMImageAttributes;
  label: string;
}

export interface IMImageAttributes {
  height: string;
}

export interface IMPrice {
  attributes: IMPriceAttributes;
  label: IMPriceLabel;
}

export interface IMPriceAttributes {
  amount: string;
  currency: Currency;
}

export enum Currency {
  Usd = "USD",
}

export enum IMPriceLabel {
  Get = "Get",
}

export interface IMReleaseDate {
  attributes: AttributeWithLabel;
  label: Date;
}

export interface Link {
  attributes: LinkAttributes;
}

export interface LinkAttributes {
  href: string;
  rel: Rel;
  type?: Type;
}

export enum Rel {
  Alternate = "alternate",
  Self = "self",
}

export enum Type {
  TextHTML = "text/html",
}

export interface PodcastEpisodes {
  resultCount: number;
  results: PodcastEpisodesResult[];
}

export interface PodcastEpisodesResult {
  wrapperType: string;
  kind: string;
  artistId?: number;
  collectionId: number;
  trackId: number;
  artistName?: string;
  collectionName: string;
  trackName: string;
  collectionCensoredName?: string;
  trackCensoredName?: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  feedUrl: string;
  trackViewUrl: string;
  artworkUrl30?: string;
  artworkUrl60: string;
  artworkUrl100?: string;
  collectionPrice?: number;
  trackPrice?: number;
  collectionHdPrice?: number;
  releaseDate: string;
  collectionExplicitness?: string;
  trackExplicitness?: string;
  trackCount?: number;
  trackTimeMillis: number;
  country: string;
  currency?: string;
  primaryGenreName?: string;
  artworkUrl600: string;
  genreIds?: string[];
  genres: any[];
  episodeUrl?: string;
  artworkUrl160?: string;
  episodeContentType?: string;
  episodeFileExtension?: string;
  closedCaptioning?: string;
  episodeGuid?: string;
  description?: string;
  shortDescription?: string;
  artistIds?: number[];
  previewUrl?: string;
}
